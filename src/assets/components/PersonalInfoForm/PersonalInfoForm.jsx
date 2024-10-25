import React, { useState } from "react";
import {
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import styles from "@assets/components/PersonalInfoForm/PersonalInfoForm.module.scss";

const PersonalInfoForm = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
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
                  variant="standard"
                  value={age}
                  onChange={handleChange(setAge)}
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
                  onChange={handleChange(setWeight)}
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
                  onChange={handleChange(setHeight)}
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
                <FormControl
                  variant="standard"
                  fullWidth
                  className={styles.PersonalInfoForm__formControl}
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
                >
                  <InputLabel sx={{ color: "#fff" }}>Гендер</InputLabel>
                  <Select
                    sx={{ color: "#fff" }}
                    value={gender}
                    onChange={handleChange(setGender)}
                    label="Гендер"
                  >
                    <MenuItem value="male">Мужской</MenuItem>
                    <MenuItem value="female">Женский</MenuItem>
                    <MenuItem value="other">Другой</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
