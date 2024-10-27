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
                padding: "10px 10px ",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Похудеть
              </Typography>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={lose}
                  alt="green iguana"
                  style={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "16px" }}
                  >
                    Программа для тех, кто хочет снизить вес и повысить свою
                    выносливость.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Выбрать
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: "17px",
                padding: "10px 10px ",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Массанабор
              </Typography>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={maintain}
                  alt="green iguana"
                  style={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "16px" }}
                  >
                    Станьте сильнее: комплекс упражнений и питание для роста
                    мышц.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
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
