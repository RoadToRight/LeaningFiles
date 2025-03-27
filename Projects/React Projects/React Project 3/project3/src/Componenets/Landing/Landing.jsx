import React, { useState } from 'react'
import styles from './Landing.module.css'
import Button from '../Button/Button'
const Landing = ({NextPage}) => {

    let a = true;

  return (
    
    <div className={`${styles.parent}`}>
        <div className={`${styles.imgdiv}`}><img src="/images/dices 1.png" alt="" className={`${styles.imgresponsive}`} /></div>
        <div className={`${styles.DiceGmeBtn}`}>
            <h1>DICE GAME</h1>
            <Button onClick={NextPage} title={`Play Now`}/>
        </div>
    </div>
  )
}

export default Landing
