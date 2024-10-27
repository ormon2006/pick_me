import React from "react";
import styles from "@assets/components/TextInfo/TextInfo.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const TextInfo = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="container">
        <div className={styles.TextInfo__text}>
          <h1 className={styles.TextInfo__typing}>
            Твой план тренировок и <br /> питания — с умной <br /> поддержкой!
          </h1>
          <Button onClick={handleNavigate}>готов начать</Button>
        </div>
      </div>
    </>
  );
};

export default TextInfo;


