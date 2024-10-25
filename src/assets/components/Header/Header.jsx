import React from 'react'
import styles from "@assets/components/Header/Header.module.scss"
import logo from "@assets/image/Logo/logo.png"
const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" />
        
      </div>
    </header>
  )
}

export default Header;
