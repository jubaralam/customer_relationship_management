import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import "./index.css";
import UserAuthDetails from "./contexts/UserAuthDetails";

const App = () => {
  return (
    <BrowserRouter>
      <UserAuthDetails>
        <Router />
      </UserAuthDetails>
    </BrowserRouter>
  );
};

export default App;
