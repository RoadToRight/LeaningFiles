import { useEffect, useState } from 'react'
import './App.css'
import Loader from './Components/Loader';

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(document.readyState)
    const handleLoad = () => {
      setLoading(false);
    };
  
    if (document.readyState === "complete") {
      handleLoad(); // If the page is already fully loaded, hide the loader
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);



// useEffect(() => {
//   const handleLoad = () => {
//     // Add an artificial delay
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000); // Adjust the delay time as needed (2000ms = 2 seconds)
//   };

//   if (document.readyState === "complete") {
//     handleLoad(); // If the page is already fully loaded, hide the loader
//   } else {
//     window.addEventListener("load", handleLoad);
//     return () => {
//       window.removeEventListener("load", handleLoad);
//     };
//   }
// }, []);

  return (
    <>
      <Loader loading={loading}/>
    </>
  )
}

export default App
