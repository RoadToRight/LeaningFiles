import React from 'react';
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo"><img src="/images/Frame 2 1.png" alt="" /></div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>ContactUs</li>
      </ul>

    </nav>
  )
}

export default Navigation;
