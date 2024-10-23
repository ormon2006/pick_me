import { Route, Routes } from "react-router-dom";
import Authorization from "@/assets/pages/Authorization.jsx";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Authorization />} />
      </Routes>
    </>
  );
};

export default Routing;
