import React from 'react'
import styles from './Button.module.css'

const Button = ({text , icon , outline,on}) => {
  return (
    <div onClick={on} className={(outline ? styles.button2: styles.button1)} >

      <div className={`${styles.texticon}`}>
        {icon}{text}
      </div>

    </div>
  )
}

export default Button;
