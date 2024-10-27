import { Route, Routes } from "react-router-dom";
import Authorization from "@pages/Authorization.jsx";
import LandingPage from "@pages/LandingPage";
import TestPage from "@/assets/pages/TestPage";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Authorization />} />
        <Route path="/person-info" element={<TestPage/>}/>
      </Routes>
    </>
  );
};

export default Routing;
