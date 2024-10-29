import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import lose from "@assets/image/TrainingIntensityCard/lose.webp";
import maintain from "@assets/image/TrainingIntensityCard/maintain.avif";
import styles from "@assets/components/TrainingIntensityCard/TrainingIntensityCard.module.scss";

export default function TrainingIntensityCard({
  onNext,
  onProgressChange,
  setGoal,
}) {
  const [selectedGoal, setSelectedGoal] = useState("");

  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
    setGoal(goal);
  };

  const handleNext = () => {
    if (selectedGoal) {
      onProgressChange(100);
      onNext();
    } else {
      alert("Пожалуйста, выберите цель.");
    }
  };

  return (
    <div className={styles.TrainingIntensityCard}>
      <div className="container">
        <div className={styles.TrainingIntensityCard__content}>
          <h2>Ваша цель</h2>
          <div className={styles.TrainingIntensityCard__cards}>
            <Card
              sx={{
                maxWidth: 345,
                padding: "15px 15px",
                borderRadius: "32px",
                border: selectedGoal === "lose" ? "2px solid #4CAF50" : "none",
                transform: "scale(1)",
                transition: "transform 0.3s ease-in-out",
                boxShadow:
                  " 0 14px 28px rgba(6, 4, 4, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "500",
                  fontFamily: "Graphik, sans-serif",
                  fontSize: "27px",
                }}
              >
                Похудеть
              </Typography>
              <CardActionArea
                onClick={() => handleGoalSelection("lose_weight")}
              >
   

                <CardMedia
                  component="img"
                  height="240"
                  image={lose}
                  alt="Похудеть"
                  style={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Программа для тех, кто хочет снизить вес и повысить свою
                    выносливость.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleNext}
                  sx={{
                    background: "#009999",
                    borderRadius: "20px",
                    color: "#FFF",
                    padding: "10px 50px",
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
                >
                  Выбрать
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                maxWidth: 345,
                padding: "15px 15px",
                borderRadius: "32px",
                border: selectedGoal === "gain" ? "2px solid #4CAF50" : "none",
                transform: "scale(1)",
                transition: "transform 0.3s ease-in-out",
                boxShadow:
                  " 0 14px 28px rgba(6, 4, 4, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",

                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "500",
                  fontFamily: "Graphik, sans-serif",
                  fontSize: "27px",
                }}
              >
                Массанабор
              </Typography>
              <CardActionArea onClick={() => handleGoalSelection("gain_weight")}>

                <CardMedia
                  component="img"
                  height="240"
                  image={maintain}
                  alt="Массанабор"
                  style={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    Увеличьте мышечную массу с продуманной программой тренировок
                    и питания.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleNext}
                  sx={{
                    background: "#009999",
                    borderRadius: "20px",
                    color: "#FFF",
                    padding: "10px 50px",
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
                >
                  Выбрать
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
