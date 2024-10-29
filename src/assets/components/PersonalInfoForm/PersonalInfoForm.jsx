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

const PersonalInfoForm = ({ onNext, onProgressChange, onUserDataChange }) => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const fields = [age, weight, height, gender];
  const isFormComplete = fields.every(Boolean);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    onUserDataChange({ gender: e.target.value }); // обновление gender
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    onUserDataChange({ weight: e.target.value }); // обновление weight
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    onUserDataChange({ height: e.target.value }); // обновление height
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    onUserDataChange({ age: e.target.value }); // обновление age
  };

  useEffect(() => {
    const filledFieldsCount = fields.filter(Boolean).length;
    const progressPercentage = (filledFieldsCount / fields.length) * 100;
    onProgressChange(progressPercentage);
  }, [age, weight, height, gender, onProgressChange]);

  const handleNext = () => {
    if (isFormComplete) {
      onNext(); // Вызываем onNext без передачи данных, данные уже обновлены
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  };

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
                  value={age}
                  onChange={handleAgeChange}
                  fullWidth
                  type="number"
                  variant="outlined"
                  sx={{
                    margin: "8px 0",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#000",
                      },
                      "&:hover fieldset": {
                        borderColor: "#005B50",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#005B50",
                      },
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#000",
                    },
                  }}
                />
                <TextField
                  label="Вес (кг)"
                  value={weight}
                  onChange={handleWeightChange}
                  fullWidth
                  type="number"
                  variant="outlined"
                  sx={{
                    margin: "8px 0",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#000",
                      },
                      "&:hover fieldset": {
                        borderColor: "#005B50",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#005B50",
                      },
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#000",
                    },
                  }}
                />
                <TextField
                  label="Рост (см)"
                  value={height}
                  onChange={handleHeightChange}
                  fullWidth
                  type="number"
                  variant="outlined"
                  sx={{
                    margin: "8px 0",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#000",
                      },
                      "&:hover fieldset": {
                        borderColor: "#005B50",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#005B50",
                      },
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#000",
                    },
                  }}
                />
              </div>
              <div className={styles.PersonalInfoForm__gender}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel sx={{ "&.Mui-focused": { color: "#000" } }}>
                    Гендер
                  </InputLabel>
                  <Select
                    value={gender}
                    onChange={handleGenderChange}
                    label="Гендер"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#000",
                        },
                        "&:hover fieldset": {
                          borderColor: "#005B50",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#005B50",
                        },
                      },
                    }}
                  >
                    <MenuItem value="male">Мужчина</MenuItem>
                    <MenuItem value="female">Женщина</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={!isFormComplete}
                  sx={{
                    backgroundColor: "#009999",
                    "&:hover": {
                      backgroundColor: "#007b7b",
                    },
                  }}
                >
                  Далее
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
