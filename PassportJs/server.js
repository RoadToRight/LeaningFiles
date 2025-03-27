import express from "express";
import passport from "passport";
import expressSession from "express-session";
import GoogleStatergy from "passport-google-oauth20";
import mongoose from "mongoose";

const app = express();

// MongoDB user schema
const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  profilePicture: { type: String },
});

const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/google-auth")
  .then(() => console.log("Db Connected"))
  .catch(() => console.log("Db Problem!"));

// Middleware setup
app.use(express.json());
app.use(expressSession({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
    }
  }));
  
app.use(passport.initialize());
app.use(passport.session());

// Passport Google OAuth setup
passport.use(new GoogleStatergy({
  // clientID: "465428037510-94crk8ehdk7cqp81n9dme1qu5gqqritb.apps.googleusercontent.com",
  // clientSecret: "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",
  callbackURL: "http://localhost:3000/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  // console.log("Google Profile:", profile); 
  const existingUser = await User.findOne({ googleId: profile.id });

  if (existingUser) {
    return done(null, existingUser); // If the user exists, log them in
  }

  // If new user, create a new user record
  const user = new User({
    googleId: profile.id,
    displayName: profile.displayName,
    email: profile.emails[0].value,
    profilePicture: profile.photos[0]?.value,
  });

  await user.save(); // Save new user to the database
  return done(null, user); // Proceed with user creation
}));

passport.serializeUser((user, done) => {
    done(null, user.googleId); // Ensure you are serializing the googleId
  });
  
  passport.deserializeUser(async (googleId, done) => {
    try {
      // Make sure to use googleId (the value passed during serializeUser)
      const user = await User.findOne({ googleId }); 
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
  

// Routes
app.get('/', (req, res) => {
    console.log("User:", req.user);
  if (req.isAuthenticated()) {
    res.send(`<h1>Hello ${req.user.displayName}</h1><a href='/logout'>Logout</a>`);
  } else {
    res.send('<h1>Home Page</h1><a href="/auth/google">Login with Google</a>');
  }
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      req.login(req.user, (err) => {
        if (err) {
          console.error(err);
          return res.redirect('/login');
        }
        res.redirect('/');
      });
    }
  );
  

app.get('/logout', (req, res) => {
  req.logout((err) => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
