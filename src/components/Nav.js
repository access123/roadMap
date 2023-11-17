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
  const { isLoggedIn } = useUser();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setToggle(false);
    }
  }, [location.pathname]);

  const logout = () => {
    // Assuming you want to close the current window on logout
    window.close();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand mx-5" to="/">
          <img src="#" alt="LOGO" />
        </Link>

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
                      <button onClick={logout} className="links dropdown-item">
                        Log Out
                      </button>
                    </MenuItem>
                  </Menu>
                </Dropdown>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
