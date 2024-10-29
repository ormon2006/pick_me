import { useState } from "react";
import axios from "axios";
import PersonalInfoForm from "@assets/components/PersonalInfoForm/PersonalInfoForm";
import TrainingIntensityCard from "@assets/components/TrainingIntensityCard/TrainingIntensityCard";
import WorkautDay from "@assets/components/WorkautDay/WorkautDay";

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progressInStep, setProgressInStep] = useState(0);
  const [userData, setUserData] = useState({
    gender: "",
    weight: "",
    height: "",
    age: "",
    goal: "",
    days: "",
  });
  const totalSteps = 4;

  const goToNextStep = async () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setProgressInStep(0);
    } else {
      await handleSubmit();
    }
  };

  const handleSubmit = async () => {
    console.log("Submitting data:", userData); // Добавьте этот лог
  
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/get_workout_plan",
        {
          params: { ...userData, weight: Number(userData.weight), height: Number(userData.height), age: Number(userData.age), days: Number(userData.days) },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Ошибка при отправке данных. Пожалуйста, попробуйте позже.");
    }
  };

  const updateProgressInStep = (progress) => {
    setProgressInStep(progress);
  };

  const handleUserDataChange = (newData) => {
    setUserData(prevState => ({ ...prevState, ...newData }));
  };

  const ProgressBar = () => (
    <div className="container">
      <div style={{ display: "flex", alignItems: "center", margin: "20px 0", justifyContent: "center" }}>
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: index < currentStep ? "#009999" : "#D3D3D3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                color: "white",
                fontSize: "12px",
              }}
            >
              {index + 1 === currentStep && (
                <span>{Math.round(progressInStep)}%</span>
              )}
            </div>
            {index < totalSteps - 1 && (
              <div
                style={{
                  width: "110px",
                  height: "8px",
                  backgroundColor: "#D3D3D3",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: `${index < currentStep - 1 ? 100 : index === currentStep - 1 ? progressInStep : 0}%`,
                    height: "100%",
                    background: "#009999",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <ProgressBar />
      {currentStep === 1 && (
        <PersonalInfoForm
          onNext={goToNextStep}
          onProgressChange={updateProgressInStep}
          onUserDataChange={handleUserDataChange}
        />
      )}
      {currentStep === 2 && (
        <TrainingIntensityCard
          onNext={goToNextStep}
          onProgressChange={updateProgressInStep}
          setGoal={(goal) => handleUserDataChange({ goal })}
        />
      )}
      {currentStep === 3 && (
        <WorkautDay
          onNext={goToNextStep}
          setDays={(days) => handleUserDataChange({ days })}
        />
      )}
    </div>
  );
};

export default TestPage;
