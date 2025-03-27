import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

const Dice = ({RollDice,RollDicess,Reset,Rules}) => {

 
  return (
    <Parent>
      <div className="img" onClick={RollDice}><img src={`/images/dice_${RollDicess}.png`} alt="" /></div>
      <H3>Click To Roll Dice</H3>
      <Button onClick={Reset}  title = {`Reset Score`}/>
      <Button onClick={Rules}  title = {`Show Rules`}/>
    </Parent>
  )
}

export default Dice;


const Parent = styled.div`

    background-color:blue;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    min-height:70vh;

`

const H3 = styled.h3`

    font-size:24px;
    font-weight:500;

`
