import React from "react";
import styles from "@assets/components/Header/Header.module.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.Header__flex}>
          <div className={styles.Header__logo}>
            <h2>
              <span>Athlete</span>Xpert.Ai
            </h2>
          </div>
          <div className={styles.Header__nav}>
            <nav>
              <ul>
                <li>
                  <a href="">О нас</a>
                </li>
                <li>
                  <a href="">Услуги</a>
                </li>
                <li>
                  <a href="">Отзывы</a>
                </li>
                <li>
                  <a href="">Контакт</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
