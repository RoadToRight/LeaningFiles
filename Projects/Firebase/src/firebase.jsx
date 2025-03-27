import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
import React, { createContext,useContext, useEffect, useState } from 'react'
import { getFirestore , collection,doc,getDocs, addDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKd9ptPqgJq1i1WjtRuMocw6P1I997Bw4",
  authDomain: "fir-practice-fe620.firebaseapp.com",
  projectId: "fir-practice-fe620",
  storageBucket: "fir-practice-fe620.appspot.com",
  messagingSenderId: "225705436767",
  appId: "1:225705436767:web:2a33e3789d95a413cdddea",
  measurementId: "G-SD5MTQFEN8", 
  // databaseURL:"https://fir-practice-fe620-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const fireBaseAuth = getAuth(fireBaseApp);
const fireBaseStorage = getFirestore(fireBaseApp);
const fireDataBase = getDatabase(fireBaseApp)

const FirebaseContext = createContext(null)

export const useFirebase =() => useContext(FirebaseContext)

const FirebaseProvider = (props) => {

  const [User, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(fireBaseAuth,(user) => {
      if(user){
        console.log("User Present")
        setUser(user)
      }else{
        console.log("User Not Present")
      }
    })
  }, [])
  
  

  const signUpUserwithEmailPass = (email,password) => {
    return createUserWithEmailAndPassword(fireBaseAuth,email,password)
  }
  const LoginUpUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(fireBaseAuth, email, password);
  };
  const createEntry = () => {
    // const userDocRef = doc(fireBaseStorage, "hats", User.uid);
    // const UserId = 
    // const ref = doc(collection(fireBaseStorage,"users",User.uid,"Orders"),"1235")
    // const ref = doc(fireBaseStorage,"users",User.uid)
    // setDoc(ref,{
    //   name:User.email,
    //   userId :User.uid
    // })

    // const anotherRef = collection(fireBaseStorage,"users",User.uid,"Orders","fs")
    // addDoc(anotherRef,{
    //   name:"Soap",
    //   price:600,
    //   userId:User.uid
    // })
    const ref = collection(fireBaseStorage,"users","User.uid","Orders")
    addDoc(ref,{
      name:"abcXCYZ"
    })
  }
  

  return (
    <FirebaseContext.Provider value={{signUpUserwithEmailPass,createEntry,LoginUpUserWithEmailAndPassword}}>
    {props.children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider;