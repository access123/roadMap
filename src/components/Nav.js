import React, { useEffect, useState } from 'react';
import './styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';
export default function Nav(props) {
  const location = useLocation();
  const [Toggle, setToggle] = useState(true);
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      setToggle(false);
    }
  }, [location.pathname])
  
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">

      <Link className="navbar-brand" to="/">
        <img src="#" alt="LOGO" />
      </Link>
      <div className="mx-auto">
        <Link to="/Roadmap" className="navbar-brand">{props.titleLink}</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">{props.li1}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/route2">{props.li2}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/route3">{props.li3}</Link>
          </li>
          {Toggle && (
            <>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" type="button" id="loginSignupDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-user blue-symbol"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right white-dropdown " aria-labelledby="loginSignupDropdown">
                  <Link className="dropdown-item" to="/login">Login</Link>
                  <Link className="dropdown-item" to="/signup">Signup</Link>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
