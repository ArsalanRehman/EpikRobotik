import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import cors from "cors";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter as Router,
  Routes,
 
  Route,
} from "react-router-dom";
import ForgottenPassword from "./pages/ForgottenPassword";
import PasswordReset from "./pages/PasswordReset";
import Signup from "./pages/Signup";


function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/forgottenpassword" element={<ForgottenPassword />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/passwordreset" element={<PasswordReset />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    
  );
}

export default App;
