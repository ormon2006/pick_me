import React from "react";
import styles from "@assets/components/TextInfo/TextInfo.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import background from "@/assets/image/background.png"


const TextInfo = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <>
    <div className={styles.TextInfo__bodybackground}>
     <div className={styles.TextInfo__container}>
      <div className="container">
        <img src={background} alt="Background" className={styles.TextInfo__background}/>
        <div className={styles.TextInfo__text}>
          <h1 className={styles.TextInfo__typing}>
            Твой план тренировок и <br /> питания — с умной поддержкой!
          </h1>
          <h2 className={styles.TextInfo__type}>
            Наш ИИ составит для вас персональные планы тренировок и питания, <br /> подстраиваясь под ваши цели. Умная поддержка поможет вам на <br /> каждом шаге к здоровью и отличной форме!
          </h2>
          <div className={styles.TextInfo__btn}>
            <Button
             type="button"
             variant="outlined"
             sx={{
              borderRadius: "5px",
              // marginLeft: "70px",
              backgroundColor: "#009999",
              color: "white",
            }}
              onClick={handleNavigate}>
              готов начать
            </Button>
          </div>
        </div>
      </div>
     </div>
    </div>
    </>
  );
};

export default TextInfo;
