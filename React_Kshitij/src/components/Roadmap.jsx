import React from "react";
import "../styles/Roadmap.css"; // Import your CSS file for styling

function Roadmap() {
  return (
    <div className="centered-container">
      <div className="centered-div">
        <button className="absolute-button top-left">Button 1</button>
        <button className="absolute-button top-right">Button 2</button>
        <button className="absolute-button bottom-left">Button 3</button>
        <button className="absolute-button bottom-right">Button 4</button>
      </div>
    </div>
  );
}

export default Roadmap;
