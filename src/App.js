import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from './components/Home';
import Courses from './components/Courses';
import Roadmap1 from './components/Roadmap1';
import Contact from './components/Contact';
import Guide from './components/Guide';
export default function App() {

  return (
    <>     
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/route1" element={Route1} />*/}
      <Route path="/contact" element={<Contact/>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/Roadmap" element={<Roadmap1 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/guides" element={<Guide/>} />
      </Routes>
    </>
  )
}
