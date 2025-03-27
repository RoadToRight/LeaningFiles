import React, { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { getFirestore,collection,addDoc ,getDocs,getDoc,doc,query,where} from "firebase/firestore";
const FireBaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAclA1WyxD5eH8WLzi80mrerBzp0gGkDS0",
  authDomain: "bookify-896d8.firebaseapp.com",
  projectId: "bookify-896d8",
  storageBucket: "bookify-896d8.appspot.com",
  messagingSenderId: "318807330221",
  appId: "1:318807330221:web:b13272b161c1bd1ab7e524",
};

const app = initializeApp(firebaseConfig);

export const useFirebase = () => useContext(FireBaseContext);

export const FirebaseProvider = (props) => {
  const [User, setUser] = useState();
  const [LoggedIn, setLoggedIn] = useState(false);
  const googleAuth = new GoogleAuthProvider();
  const FirebaseAuth = getAuth(app);
  const Storage = getStorage(app);
  const FireStore = getFirestore(app)
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        setUser(user);
        setLoggedIn(true);
      } else {
        setUser(null);
        setLoggedIn(false);
      }
    });
  }, []);

  console.log(User);

  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };

  const LoginUpUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(FirebaseAuth, email, password);
  };
  const GoogleSignin = () => {
    signInWithPopup(FirebaseAuth, googleAuth);
  };
  const DataListUpload = async (name, isbnNum, cover, Price) => {
    const imgref = ref(Storage, `/uploads/images/${Date.now()}-${cover.name}`);
    const UploadImage = await uploadBytes(imgref, cover);

   return await addDoc(collection(FireStore,"books"),{
      name:User.displayName,
      email:User.email,
      uid:User.uid,
      PhotoURL:User.photoURL,
      Bookname:name,
      price:Price,
      isbnNum:isbnNum,
      coverImgUrl:UploadImage.ref.fullPath,
    })

  };

  const getDocsFireStore =  () => {

   return  getDocs(collection(FireStore,"books"));

  }
  const getDocFireStoreSingle = (id) => {
    const ref = doc(FireStore,"books",id)
    return getDoc(ref);

  }

  const DowloadURL = async (path) => {
   return await getDownloadURL(ref(Storage,path))
  }

  const OrderNow = (qty,id) => {

    const collectionRef = collection(FireStore,"books",id,"orders");
    addDoc(collectionRef,{
      name:User.displayName,
      email:User.email,
      uid:User.uid,
      PhotoURL:User.photoURL,
      qty:qty
    })

  }
  const OrderShowing = () => {
    if(!User) return null;
    const collectionRef = collection(FireStore,"books");
    const q = query(collectionRef,where("uid" , "==" ,User.uid))
    return getDocs(q)

  }

  return (
    <FireBaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        LoginUpUserWithEmailAndPassword,
        LoggedIn,
        setLoggedIn,
        GoogleSignin,
        User,
        DataListUpload,
        FirebaseAuth,
        getDocsFireStore,
        DowloadURL,
        getDocFireStoreSingle,
        OrderNow,
        OrderShowing
      }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};
