import { Route, Routes } from "react-router-dom";
import Authorization from "@/assets/pages/Authorization.jsx";
import LandingPage from "@pages/LandingPage";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Authorization />} />
      </Routes>
    </>
  );
};

export default Routing;
