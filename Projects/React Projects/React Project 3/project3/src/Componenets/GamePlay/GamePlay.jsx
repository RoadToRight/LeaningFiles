import React, { useState } from "react";
import styles from "./GamePlay.module.css";
import NumberChooser from "../NumberChooser/NumberChooser";
import Dice from "../Dice/Dice";
import styled from "styled-components";

const GamePlay = () => {
  let array = [1, 2, 3, 4, 5, 6];
 
  let [SelectedNumber, setSelectedNumber] = useState();
  let [RollDicess , setRollDices] = useState(1);
  let [UpdateScore , setUpdateScore] = useState(0);
  let [ErrorMessage , setErrorMessage] = useState();
  let [Rulesss , setRules] = useState(false);

  function getRandomArbitrary(min, max) {
    return Math.floor( Math.random() * (max - min) + min);
  }

  const RollDice = () => {
    
   let RandomVal = getRandomArbitrary(1,7);
   setRollDices(RandomVal);
    if(!SelectedNumber){
      setRollDices(RollDicess)
      setErrorMessage('You Have Not Selected Any Value');
      
      return;
    }
   if(RollDicess == SelectedNumber){

    setUpdateScore((prev) => prev + RollDicess)

   }
   else{
    setUpdateScore((prev) => prev - 2)
   }
   setSelectedNumber("");
  }

  const SetSelectNumberEroorHandler = (x) => {

    setSelectedNumber(x);
    setErrorMessage("")

  }

  function Reset() {
    setUpdateScore(0);
    console.log('dasdsa');

  }
  function Rules(){
    console.log('das');

    setRules(prev => !prev);

  }

  
  
  
  return (
    <div className={`${styles.parent}`}>
      {ErrorMessage}
      <div className={`${styles.ScoreNumberChooser}`}>
        <div className={`${styles.ScoreNumber}`}>
          <span>{UpdateScore}</span>
          <h2>Total Score</h2>
        </div>
        
        <div className={`${styles.NumberChooserSelectNumberParent}`}>
          <div className={`${styles.NumberChooser}`}>
            {array.map((x, y) => (
              <NumberChooser
                Click={() => SetSelectNumberEroorHandler(x)}
                key={y}
                value={x}
                SelectedNumberState={SelectedNumber}
                isselected={true}
              />
            ))}
          </div>

          <div className={`${styles.SelectNumber}`}>
            <h2>Select Number</h2>
          </div>
        </div>
      </div>


            <Dice  RollDice={RollDice}  RollDicess = {RollDicess} Reset = {Reset} Rules={Rules}/>

            {Rulesss && <Ruless>
              <h1>How to play dice game</h1>
              <br />
              <p>Select any number</p>
              <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
              <p>f you get wrong guess then  2 point will be dedcuted</p>
            </Ruless>}

    </div>
  );
};

export default GamePlay;

const Ruless = styled.div`

`