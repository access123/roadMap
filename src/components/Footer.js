import React from "react";
import "./styles/Footer.css";
function Footer() {
  const obj = {
    textAlign: "center",
  };
  return (
    <>
      <footer id='footer'>

      <div className="flex">
        <div className="head">
          <p style={obj}>Under the guidance of</p>
          <h5 style={obj}>Dr. Jyoti Wadmare</h5>
          <p style={obj}>Developed by</p>
        </div>
        <ul>
          <li>Kshitij Patil</li>
          <li>Dev Panchal</li>
          <li>Chaitanya Nemade</li>
          <li>Atharv Patil</li>
        </ul>
      </div>
      </footer>
    </>
  );
}

export default Footer;
