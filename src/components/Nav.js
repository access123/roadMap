import React, { useEffect, useState } from "react";
import "./styles/Nav.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, Dropdown } from "@mui/joy";
import { MoreVert } from "@mui/icons-material";
import IconButton from "@mui/joy/IconButton";
import { useUser } from "./Context";
export default function Nav() {
  const location = useLocation();
  const [Toggle, setToggle] = useState(true);
  const { isLoggedIn, user } = useUser();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setToggle(false);
    }
  }, [location.pathname]);
  useEffect(() => {
    if (isLoggedIn) {
      const userDataFromSessionStorage = sessionStorage.getItem("email");
      if (userDataFromSessionStorage) {
        const userData = JSON.parse(userDataFromSessionStorage);
      }
    }
  }, [isLoggedIn]);
  const logout = () => {
    window.close();
  };

  return (
    <nav className="navbar navbar-expand-sm ">
      <Link className="navbar-brand mx-5" to="/">
        <img src="#" alt="LOGO" />
      </Link>
      <div className="">
        <Link to="/Roadmap" className="navbar-brand">
          ROADMAP
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
          </li>

          {Toggle && (
            <>
              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{ root: { variant: "soft", color: "neutral" } }}
                >
                  <MoreVert />
                </MenuButton>
                <Menu>
                  <MenuItem>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="dropdown-item" to="/signup">
                      Signup
                    </Link>
                  </MenuItem>
                </Menu>
              </Dropdown>
            </>
          )}
          {isLoggedIn && (
            <>
              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{ root: { variant: "soft", color: "neutral" } }}
                >
                  <MoreVert />
                </MenuButton>
                <Menu>
                  <MenuItem>
                    <button
                      onClick={() => {
                        logout();
                      }}
                      className="links"
                    >
                      Log Out
                    </button>
                  </MenuItem>
                </Menu>
              </Dropdown>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
