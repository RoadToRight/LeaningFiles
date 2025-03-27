import React from 'react'
import { useFirebase } from '../Context/Firebase';

const Home = () => {
    const Firebase = useFirebase();
    console.log(Firebase.LoggedIn)
  return (
    
    <div>Home</div>
  )
}

export default Home