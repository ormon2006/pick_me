import * as React from "react";
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

export default function TrainingIntensityCard() {
  const [selectedGoal, setSelectedGoal] = React.useState(null);

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
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
                borderRadius: "17px",
                padding: "10px 10px",
                border: selectedGoal === "lose" ? "2px solid #4CAF50" : "none",
                boxShadow:
                  selectedGoal === "lose"
                    ? "0px 0px 10px rgba(76, 175, 80, 0.5)"
                    : "none",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                2
              </Typography>
              <CardActionArea onClick={() => handleSelectGoal("lose")}>
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
                    sx={{ color: "text.secondary", fontSize: "16px" }}
                  >
                    Подберем оптимальные тренировки для двух дней
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleSelectGoal("lose")}
                >
                  Выбрать
                </Button>
              </CardActions>
            </Card>

            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "17px",
                padding: "10px 10px",
                border: selectedGoal === "gain" ? "2px solid #4CAF50" : "none", // Фокус на выбранной карточке
                boxShadow:
                  selectedGoal === "gain"
                    ? "0px 0px 10px rgba(76, 175, 80, 0.5)"
                    : "none",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                3
              </Typography>
              <CardActionArea onClick={() => handleSelectGoal("gain")}>
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
                    sx={{ color: "text.secondary", fontSize: "16px" }}
                  >
                    Подберем оптимальные тренировки для трех дней
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleSelectGoal("gain")}
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
