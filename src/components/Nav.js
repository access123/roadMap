import React, { useEffect, useState } from 'react';
import './styles/Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, Dropdown } from '@mui/joy';
import { MoreVert } from '@mui/icons-material';
import IconButton from '@mui/joy/IconButton';
export default function Nav(props) {
  const location = useLocation();
  const [Toggle, setToggle] = useState(true);
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      setToggle(false);
    }
  }, [location.pathname])

  return (
    <nav className="navbar navbar-expand-sm ">

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
            <Link className="nav-link" to="/contact">{props.li3}</Link>
          </li>
          {Toggle && (
            <>
              <Dropdown>
                <MenuButton
                  slots={{ root: IconButton }}
                  slotProps={{ root: { variant: 'soft', color: 'neutral' } }}
                >
                  <MoreVert />
                </MenuButton>
                <Menu>
                  <MenuItem><Link className="dropdown-item" to="/login">Login</Link></MenuItem>
                  <MenuItem><Link className="dropdown-item" to="/signup">Signup</Link></MenuItem>
                </Menu>
              </Dropdown>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
