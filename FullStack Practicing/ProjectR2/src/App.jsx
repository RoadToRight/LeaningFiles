import { useEffect, useState } from "react";
import "./App.css";
import Scroll from "./Componenets/Scroll-Indicator/Scroll";
import Navigation from "./Componenets/Navigation/Navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Componenets/Footer/Footer";
import Contact from "./Componenets/Contactus/Contact";
import Register from "./Componenets/Register/Register";
import Home from "./Componenets/HomeComponent/Home";
import About from "./Componenets/About/About";
import { ToastContainer } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import userDataContext from "../userDataContext";
import LoaderSpinner from "./Componenets/LoaderSpinner/LoaderSpinner";

function App() {
  const [userData, setuserData] = useState();
  const [TogggleAccLog, setTogggleAccLog] = useState(true);
  const [User, setUser] = useState();
  const urlmain = "https://first-upload-gamma.vercel.app";
  let {
    user,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
    isAuthenticated,
  } = useAuth0();

  /**
   * ! Token Verify
   */

  const [token, settoken] = useState();

  const getUserMetadata = async () => {
    const domain = "dev-i3wl8agttv16q6iq.us.auth0.com";

    const accessToken = await getAccessTokenSilently({
      authorizationParams: {
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      },
    });
    console.log(accessToken);
    settoken(accessToken);
  };
  getUserMetadata();

  // useEffect(() => {
  //   const tokenVerify = async () => {
  //     try {
  //       let result = await fetch(`${urlmain}/verify`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           authorization: `Bearer ${token}`,
  //         },
  //       });
  //       result = await result.json();
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   tokenVerify();
  // }, [token])
  

  /**
   * ! Use Effects
   */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
  
    async function getUserProfile(userId, accessToken) {
      const url = `https://dev-i3wl8agttv16q6iq.us.auth0.com/api/v2/users/${userId}`;
      let response = await fetch(url, {
        method: "get",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      response = await response.json(); // Contains user details
      console.log(response);
      setUser(response);
    }
    if (!user) {
      return;
    } else {
      getUserProfile(user.sub, token);
    }
  }, [user]);


  
  useEffect(() => {
  

    async function geUserProfile(userId, accessToken) {
      const url = `https://dev-i3wl8agttv16q6iq.us.auth0.com/api/v2/users/${userId}`;
      let response = await fetch(url, {
        method: "get",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      response = await response.json(); // Contains user details
      console.log(response);
      setUser(response);
    }
    if (!user) {
      return;
    } else {
      geUserProfile(user.sub, token);
    }
    console.log("hello")
  }, [!User?.email])
  

  useEffect(() => {
    if (isAuthenticated) {
      const RegisterUser = async () => {
        try {
          let result = await fetch(`${urlmain}/api/user/register`, {
            method: "post",
            body: JSON.stringify({
              auth0Id: User.user_id,
              email: User.email,
              name: User.name,
              email_verified: User.email_verified,
              nickname: User.nickname,
              picture: User.picture,
              created_at: User.created_at,
            }),
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          result = await result.json();
          if (!result.message === "User Registered!") {
            RegisterUser();
          }
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      };
      RegisterUser();
    }
  }, [User]);

  return (
    <BrowserRouter>
      <userDataContext.Provider
        value={{ userData, setuserData, TogggleAccLog, setTogggleAccLog ,User, setUser}}
      >
        <Scroll />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />}></Route>
      

          <Route path="/ContactUs" element={<Contact />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          
         

      
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
        
        <Footer />
      </userDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
