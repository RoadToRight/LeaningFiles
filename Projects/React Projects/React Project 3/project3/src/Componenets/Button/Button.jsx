import React from 'react';
import styles from './Button.module.css';
import styled from 'styled-components';

const Button = ({onClick,title}) => {
  return (
    <button className={`${styles.button1}`} onClick={onClick}>
       <h2> {title} </h2>
      
    </button>
   
  )
}

export default Button;


