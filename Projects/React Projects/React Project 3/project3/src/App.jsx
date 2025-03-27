import React,{useState} from 'react';
import Landing from './Componenets/Landing/Landing';
import './App.css'
import GamePlay from './Componenets/GamePlay/GamePlay';
const App = () => {

  const [IsGameStarted , GameIsStarted] = useState(false)

  function NextPage(){

      GameIsStarted((props) => !props);

  }


  return (
    <div>
      {

        IsGameStarted ? <GamePlay /> : <Landing NextPage={NextPage}/>

      }
      
    </div>
  )
}

export default App
