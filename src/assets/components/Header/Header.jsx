import React from "react";
import styles from "@assets/components/Header/Header.module.scss";
import { Button } from "@mui/material";
import {Navigate, useNavigate} from "react-router-dom"
 const navigate = useNavigate
const Header = () => {
  return (
    <header className={styles.Header}>
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
        <div className={styles.Header__text}>
          <h1 className={styles.Header__typing}>
            Твой план тренировок и <br /> питания — с умной <br /> поддержкой!
          </h1>
          <Link path="/login">
            <Button>готов начать</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
