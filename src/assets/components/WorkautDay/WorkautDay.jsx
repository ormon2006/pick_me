import React, { useState } from "react";
import styles from "@assets/components/WorkautDay/WorkautDay.module.scss";
import {
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import number2 from "@assets/image/WorkautDay/2.png";
import number3 from "@assets/image/WorkautDay/3.png";

const WorkautDay = ({ onNext, setDays }) => {
  const navigate = useNavigate() 
  const [selectedDays, setSelectedDays] = useState("");

  const handleDaySelection = (days) => {
    const daysMap = {
      "Три дня": 3,  // Исправлено имя ключа
      "Два дня": 2,
    };
    
    setSelectedDays(days);
    setDays(daysMap[days]); 
  };

  const handleNext = () => {
    if (selectedDays) {
      onNext();
      navigate("/result-page");

    } else {
      alert("Пожалуйста, выберите количество дней для тренировок.");
    }
  };

  return (
    <div className={styles.WorkautDay}>
      <div className="container">
        <div className={styles.WorkautDay__content}>
          <h2>Тренировки в неделю</h2>
          <div className={styles.WorkautDay__cards}>
            <div className={styles.WorkautDay__two}>
              <Card
                sx={{
                  maxWidth: 305,
                  padding: "15px 15px",
                  borderRadius: "32px",
                  border:
                    selectedDays === "Два дня" ? "2px solid #4CAF50" : "none",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease-in-out",
                  boxShadow:
                    "0 14px 28px rgba(6, 4, 4, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardActionArea onClick={() => handleDaySelection("Два дня")}>
                  <CardMedia
                    image={number2}
                    component="img"
                    height="240"
                    alt="2"
                    style={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.secondary",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      2 тренировки: "Для поддержания формы и активности."
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    type="button"
                    variant="outlined"
                    sx={{
                      background: "#009999",
                      borderRadius: "20px",
                      color: "#FFF",
                      padding: "10px 80px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      "&:hover": {
                        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                      },
                      "&:disabled": {
                        background: "#A0A0A0",
                        color: "#FFF",
                      },
                    }}
                    onClick={handleNext}
                  >
                    Выбрать
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className={styles.WorkautDay__three}>
              <Card
                sx={{
                  maxWidth: 305,
                  padding: "15px 15px",
                  borderRadius: "32px",
                  border:
                    selectedDays === "Три дня" ? "2px solid #4CAF50" : "none",
                  transform: "scale(1)",
                  transition: "transform 0.3s ease-in-out",
                  boxShadow:
                    "0 14px 28px rgba(6, 4, 4, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardActionArea onClick={() => handleDaySelection("Три дня")}>
                  <CardMedia
                    image={number3}
                    component="img"
                    height="240"
                    alt="3"
                    style={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "text.secondary",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      3 тренировки: "Для похудения и улучшения выносливости."
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    type="button"
                    variant="outlined"
                    sx={{
                      background: "#009999",
                      borderRadius: "20px",
                      color: "#FFF",
                      padding: "10px 80px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      "&:hover": {
                        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                      },
                      "&:disabled": {
                        background: "#A0A0A0",
                        color: "#FFF",
                      },
                    }}
                    onClick={handleNext}
                  >
                    Выбрать
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkautDay;
