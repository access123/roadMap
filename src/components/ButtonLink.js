import React from "react";
import "./styles/ButtonLink.css";

 const ButtonLink = ({ text = "Button", className, divClassName }) => {
  return (
    <button className={`button-link ${className}`}>
      <div className={`button ${divClassName}`}>{text}</div>
    </button>
  );
};


export default ButtonLink; 