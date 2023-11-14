import React from "react";
import Nav from "./Nav";
import Rule from "./Rule";
import "./styles/Quiz.css";
const Quiz = () => {
  return (
    <div>
      <Nav titleLink={"Roadmap"} li1={"HOME"} li2={"ABOUT"} li3={"CONTACT"} />
      <Rule />
    </div>
  );
};

export default Quiz;
