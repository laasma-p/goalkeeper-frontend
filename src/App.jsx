import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Goals from "./components/Goals/Goals";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="goals" element={<Goals />} />
      </Routes>
    </>
  );
}

export default App;
