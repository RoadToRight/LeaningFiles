import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const Auth = () => {

    let {user,loginWithRedirect,logout,isAuthenticated,getAccessTokenSilently} = useAuth0();
    console.log(user)

    const [token, settoken] = useState()

 
    const getUserMetadata = async () => {
      const domain = "dev-i3wl8agttv16q6iq.us.auth0.com";
  
    
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://dev-i3wl8agttv16q6iq.us.auth0.com/api/v2/`,
            scope: "read:current_user",
          },
    }) 
    console.log(accessToken)
    settoken(accessToken)
  
  }
  getUserMetadata()

const tokenVerify = async () => {
  try {
      let result = await fetch("http://localhost:4000/verify",{
        headers:{
          "Content-Type":"application/json",
          "authorization": `Bearer ${token}`,
        }
     
      })
      result = await result.json()
      console.log(result)
  } catch (error) {
      console.log(error)
  }
}

  return (
    <div>
        {!isAuthenticated ? <button onClick={() => loginWithRedirect()}>Login With Redirect</button> : <button onClick={() => logout()}>Logout</button>}
        <button onClick={() => tokenVerify()}>VERIFY ME!</button>
    </div>
  )
}

export default Auth;