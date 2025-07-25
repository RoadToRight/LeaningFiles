import React from 'react'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import { useAuth0 } from '@auth0/auth0-react'


const Home = () => {

 let {user,loginWithRedirect} = useAuth0();
 let token;
let callToken = async () => {
  token = await useAuth0().getAccessTokenSilently();
  console.log(token)
}
callToken()



  return (
    <div>
      
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      
    </div>
  )
}

export default Home