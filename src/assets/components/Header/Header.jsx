import React from 'react'
import styles from "@assets/components/Header/Header.module.scss"
const Header = () => {
  return (
    <header>
      <div className={styleslogo}>AthleteXpert.Ai</div>
      <nav className={styles.nav}>
        <a href="about">О нас</a>
        <a href="services">Услуги</a>
        <a href="rewievs">Отзывы</a>
        <a href="contacts">Контакты</a>
      </nav>
    </header>
  )
}

export default Header;
