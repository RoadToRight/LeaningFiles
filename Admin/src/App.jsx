import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextFirst from './Context/Context';
import ContentM from './Components/Dashboard/ContentM';
import ContentB from './Components/Dashboard/ContentB';
import Home from './Components/Dashboard/Home';

function App() {

  const [JsonData, setJsonData] = useState([]);
  const [JsonField, setJsonField] = useState([]);
  const [CheckBox, setCheckBox] = useState([]);
  const [selectedValue, setSelectedValue] = useState("FullAccess");
  const routesJsonData = async () => {
    
    try {
      let result = await fetch("http://localhost:3001/dataToFront")

      result = await result.json();
      console.log(result.data)
      setJsonData(result.data);
      
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    routesJsonData()
  }, [])
  


  return (
    <div className='didact-gothic-regular'>
      <ContextFirst.Provider value={{JsonData, setJsonData,JsonField, setJsonField,routesJsonData,CheckBox, setCheckBox,selectedValue, setSelectedValue}}>
     <Dashboard />

      <Routes>
        {/* <Route path='/Content/Type/Manager/:collectionName' element={<ContentM />}></Route>
        <Route path='/Content/Type/Builder/:collectionName' element={<ContentB />}></Route> */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
      </ContextFirst.Provider>
    </div>
  )
}

export default App

