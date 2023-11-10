import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from './components/Home';
import Courses from './components/Courses';
import Roadmap1 from './components/Roadmap1';
import Guide from './components/Guide';
import Admin from './components/Admin';
import Undercon from './components/Undercon';
import UserProvider, { UserContext } from './components/Context';

export default function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Undercon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Roadmap" element={<Roadmap1 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/guides" element={<Guide />} />
        <Route path="/quiz" element={<Undercon />} />
      </Routes>
    </UserProvider>
  )
}
