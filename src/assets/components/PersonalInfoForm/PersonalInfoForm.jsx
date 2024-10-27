import { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import styles from "@assets/components/PersonalInfoForm/PersonalInfoForm.module.scss";

const PersonalInfoForm = ({ onNext, onProgressChange }) => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");

  const fields = [age, weight, height, gender];
  const isFormComplete = fields.every(Boolean);

  useEffect(() => {
    const filledFieldsCount = fields.filter(Boolean).length;
    const progressPercentage = (filledFieldsCount / fields.length) * 100;
    onProgressChange(progressPercentage); // Обновляем прогресс при изменении полей
  }, [age, weight, height, gender, onProgressChange]);

  return (
    <div className={styles.PersonalInfoForm}>
      <div className="container">
        <div className={styles.PersonalInfoForm__content}>
          <h2>Введите ваши данные</h2>
          <div className={styles.PersonalInfoForm__fields}>
            <form>
              <div className={styles.PersonalInfoForm__number}>
                <TextField
                  label="Возраст"
                  variant="standard"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  fullWidth
                  type="number"
                  InputProps={{
                    style: { color: "#FFF" },
                  }}
                  InputLabelProps={{
                    style: { color: "#FFF" },
                  }}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#A0A0A0",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#FFF",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FFF",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#FFF",
                    },
                  }}
                />
                <TextField
                  label="Вес (кг)"
                  variant="standard"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  fullWidth
                  type="number"
                  InputProps={{
                    style: { color: "#FFF" },
                  }}
                  InputLabelProps={{
                    style: { color: "#FFF" },
                  }}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#A0A0A0",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#FFF",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FFF",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#FFF",
                    },
                  }}
                />
                <TextField
                  label="Рост (см)"
                  variant="standard"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  fullWidth
                  type="number"
                  InputProps={{
                    style: { color: "#FFF" },
                  }}
                  InputLabelProps={{
                    style: { color: "#FFF" },
                  }}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#A0A0A0",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#FFF",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#FFF",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#FFF",
                    },
                  }}
                />
              </div>
              <div className={styles.PersonalInfoForm__gender}>
                <FormControl variant="standard" fullWidth>
                  <InputLabel
                    sx={{
                      color: "#FFF",
                      "&.Mui-focused": { color: "#FFF" },
                      "&:hover": { color: "#FFF" }, 
                    }}
                  >
                    Гендер
                  </InputLabel>
                  <Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    label="Гендер"
                    sx={{
                      color: "#FFF",
                      "& .MuiSvgIcon-root": {
                        color: "#FFF",
                      },
                      "& .MuiSelect-icon": {
                        color: "#FFF",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FFF", 
                      },
                    }}
                  >
                    <MenuItem value="male">Мужской</MenuItem>
                    <MenuItem value="female">Женский</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {isFormComplete && (
                <div className={styles.PersonalInfoForm__btn}>
                  <Button
                    type="button"
                    variant="outlined"
                    sx={{
                      backgroundColor: "#4CAF50",
                      borderRadius: "20px",
                      marginTop: "32px",
                      color: "#FFF",
                      padding: "10px 60px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      "&:hover": {
                        background: "linear-gradient(45deg, #32C1CD, #3A8DFF)",
                        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                      },
                      "&:disabled": {
                        background: "#A0A0A0",
                        color: "#FFF",
                      },
                    }}
                    onClick={onNext}
                  >
                    Далее
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
