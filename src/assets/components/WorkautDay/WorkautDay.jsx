import React, { useState } from "react";
import styles from "@assets/components/WorkautDay/WorkautDay.module.scss";
import { Card, Typography, CardActionArea, CardMedia, CardContent, CardActions } from "@mui/material";
const WorkautDay = () => {
    const [selectedGoal, setSelectedGoal] = useState(null)

    const  handleSelectGoal = (goal) => {
        selectedGoal(goal)
    }

  return (
    <div>
      <div className="container"> 
        <div className={styles.WorkautDay__content}>
          <h2>Количество тренировочных дней в неделю</h2>
          <div className={styles.WorkautDay__cards}>
            <div className={styles.WorkautDay__two}>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: "17px",
                  padding: "10px 10px",
                  border:
                    selectedGoal === "lose" ? "2px solid #4CAF50" : "none",
                  boxShadow:
                    selectedGoal === "lose"
                      ? "0px 0px 10px rgba(76, 175, 80, 0.5)"
                      : "none",
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  Похудеть
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
                      Программа для тех, кто хочет снизить вес и повысить свою
                      выносливость.
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
            </div>
            <div className={styles.WorkautDay__three}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkautDay;
