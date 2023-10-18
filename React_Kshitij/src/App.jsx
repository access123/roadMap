import React from "react";
import "./styles/App.css";
import RegistrationForm from "./components/Registration";
import LoginPage from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Session from "./components/Session";
import SignUp from "./components/SignUp";
import WelcomePage from "./components/WelcomePage";
import Arrows from "./components/Arrows";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/session" element={<Session />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/test" element={<Arrows />} />
        <Route path="/rmap" element={<Roadmap />} />
      </Routes>
    </div>
  );
}

export default App;
