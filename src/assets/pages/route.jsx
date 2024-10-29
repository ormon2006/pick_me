import { Route, Routes } from "react-router-dom";
import Authorization from "@pages/Authorization.jsx";
import LandingPage from "@pages/LandingPage";
import TestPage from "@pages/TestPage";
import WorkoutPage from "@/assets/pages/WorkoutPage";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Authorization />} />
        <Route path="/person-info" element={<TestPage/>}/>
        <Route path="/result-page" element={<WorkoutPage/>}/>
      </Routes>
    </>
  );
};

export default Routing;
