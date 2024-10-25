import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "@assets/components/Login/Login.module.scss";
import { Snackbar, TextField, Alert, Button } from "@mui/material";



const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const nameValid = name.trim().length >= 3;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 6;

    setEmailError(!emailValid && emailTouched);
    setNameError(!nameValid && nameTouched);
    setPasswordError(!passwordValid && passwordTouched);

    if (nameValid && emailValid && passwordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, email, password, nameTouched, emailTouched, passwordTouched]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleNameBlur = () => setNameTouched(true);
  const handleEmailBlur = () => setEmailTouched(true);
  const handlePasswordBlur = () => setPasswordTouched(true);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/person-info");
    } else {
      handleValidate();
    }
  };

  return (
    <div className={styles.Login}>
      <div className="container" id="container">
        <div className={styles.Login__content}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <h2 className={styles.Login__h2}>Войти</h2>
              <p className={styles.Login__info}>
                Введите свои данные, чтобы пройти тест
              </p>
              <div className={styles.Login__user}>
                <TextField
                  style={{
                    margin: "8px 0",
                    width: "100%",
                    borderRadius: "30px",
                  }}
                  variant="standard"
                  label="Имя"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  error={nameError}
                  helperText={
                    nameError ? "Имя должно быть не менее 3 символов" : ""
                  }
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
              <div className={styles.Login__mail}>
                <TextField
                  style={{
                    margin: "8px 0",
                    width: "100%",
                    borderRadius: "30px",
                  }}
                  variant="standard"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  error={emailError}
                  helperText={emailError ? "Введите корректный email" : ""}
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

              <TextField
                style={{
                  margin: "8px 0",
                  width: "100%",
                  borderRadius: "30px",
                }}
                variant="standard"
                label="Пароль"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={handlePasswordBlur}
                error={passwordError}
                helperText={
                  passwordError ? "Пароль должен быть не менее 6 символов" : ""
                }
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

              <Button
                type="submit"
                variant="outlined"
                sx={{
                  background: "linear-gradient(45deg, #3A8DFF, #32C1CD)",
                  borderRadius: "20px",
                  marginTop: "32px",
                  color: "#FFF",
                  padding: "10px 60px",
                  marginLeft: "90px",
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
                disabled={!isFormValid}
              >
                Перейти к тестам
              </Button>
            </form>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity="error">
                Вы неправильно ввели имя, email или пароль
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
