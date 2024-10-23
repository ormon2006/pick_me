import { BrowserRouter } from "react-router-dom";
import Routing from "@assets/pages/route";
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
