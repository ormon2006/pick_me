import { useState } from "react";
import PersonalInfoForm from "@assets/components/PersonalInfoForm/PersonalInfoForm";
import TrainingIntensityCard from "@assets/components/TrainingIntensityCard/TrainingIntensityCard";

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progressInStep, setProgressInStep] = useState(0);
  const totalSteps = 3;

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      setProgressInStep(0);
    }
  };

  const updateProgressInStep = (progress) => {
    setProgressInStep(progress);
  };

  const ProgressBar = () => (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px 0",
          justifyContent: "center",
        }}
      >
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: index < currentStep ? "#4CAF50" : "#D3D3D3",
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
                    width: `${
                      index < currentStep - 1
                        ? 100
                        : index === currentStep - 1
                        ? progressInStep
                        : 0
                    }%`,
                    height: "100%",
                    backgroundColor: "#4CAF50",
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
        />
      )}
      {currentStep === 2 && <TrainingIntensityCard onNext={goToNextStep} />}
      {currentStep === 3 && <div>Финальный этап</div>}
    </div>
  );
};

export default TestPage;
