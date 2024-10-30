import React from "react";
import Header from "@assets/components/Header/Header.jsx";
import TextInfo from "@assets/components/TextInfo/TextInfo.jsx";
import ProcessGuideCard from "@/assets/components/ProcessGuideCard/ProcessGuideCard.jsx";
import InfoCard from "@/assets/components/InfoCard/InfoCard.jsx";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <TextInfo />
      <ProcessGuideCard />
      <InfoCard />
    </div>
  );
};

export default LandingPage;
