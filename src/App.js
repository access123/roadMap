import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from './components/Home';
import Courses from './components/Courses';
import Roadmap1 from './components/Roadmap1';
// import Canvas from "./components/Canvas";
// import Route1 from './Route1';
// import Route2 from './Route2';
// import Route3 from './Route3';
// import Route4 from './Route4';
// import './App.css'
export default function App() {

  return (
    <>     
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/route1" element={Route1} />
      <Route path="/route3" element={Route3} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/Roadmap" element={<Roadmap1 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>
    </>
  )
}
