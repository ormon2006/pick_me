import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./pages/route";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
};

export default App;
