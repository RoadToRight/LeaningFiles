import React, { useEffect, useState } from 'react'
import Navigation from './Componenets/Navigation/Navigation'
import styled ,{createGlobalStyle} from 'styled-components'
import Landing from './Componenets/Landing/Landing'
import Carts from './Componenets/Landing/Landing'
console.log(Carts);


const FAKE_API = "https://fakestoreapi.com/products";
const App = () => {

  let [FinalData , setFinalData] = useState();
  let [ search , setsearch ] = useState();
  let [btnSearch , setbtnSearch] = useState();

  useEffect(() => {

    const getData = async () => {

      let response = await fetch(FAKE_API);
      let Data = await response.json();
      
      setFinalData(Data);
      setsearch(Data)
    }

    getData();

  },[])



  const GetInpVal = (e) => {

      let inpval = e.target.value;
      console.log(inpval);
      if(inpval == undefined)return;
        
      if(search == undefined){
        setsearch(FinalData)
      }
     let filter = FinalData?.filter(function(x){

         return x.title.toLowerCase().includes(inpval.toLowerCase()) 
         
       
        
       
      })
      console.log(filter);
      setsearch(filter);
  }
const ButtonParAlag = (category) => {
  console.log(category);

 

  if(category == undefined){
    setsearch(FinalData);
  }
  if(category === "All"){
    setsearch(FinalData);
  }else{
    let filter = FinalData?.filter(function(x){

      return x.category.toLowerCase().includes(category.toLowerCase()) 
      
    
     
    
   })
   setsearch(filter);
  }
 

}
  

  return (
    <div>
      <Global />
      <Navigation data={FinalData} GetInpVal={GetInpVal} ButtonParAlag={ButtonParAlag}/>
      <Landing data={search} search={search}/>
      
    </div>
  )
}

export default App


const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
  color:white;
}

`