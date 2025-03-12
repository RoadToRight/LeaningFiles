import jwt from "jsonwebtoken";
import JwksRsa from "jwks-rsa";
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(cors());

// Setting up the JWKS client to fetch Auth0's public keys for token verification
const client = JwksRsa({
  jwksUri: `https://dev-i3wl8agttv16q6iq.us.auth0.com/.well-known/jwks.json`,
});

// Function to get the signing key from JWKS
function getKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    const signingKey = key.getPublicKey();
    callback(null, signingKey);
  });
}

app.get("/verify", async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1]; // Extract token from Authorization header

  // Decode and log token (optional for debugging)
  const decoded = jwt.decode(token);
  console.log("Decoded Token:", decoded);

  // Verify the token using Auth0's public keys
  jwt.verify(
    token,
    getKey,
    {
      audience: "https://dev-i3wl8agttv16q6iq.us.auth0.com/api/v2/",
      issuer: `https://dev-i3wl8agttv16q6iq.us.auth0.com/`,
      algorithms: ["RS256"],
    },
    async (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err);
        return res.status(401).send({ err: "Invalid token" });
      }

      console.log("Token is valid:", decoded);

      // Extract user ID from the decoded token (Google OAuth2 user ID)
      const userId = decoded.sub;
      const fetchUser = async (accessToken, googleUserId) => {
        const url = `https://dev-i3wl8agttv16q6iq.us.auth0.com/api/v2/users/google-oauth2|103747429707862836714`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = await response.json();
        console.log(user);
        return user;
      };
      fetchUser();
      // Log the extracted user ID
    }
  );
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

export default app;
