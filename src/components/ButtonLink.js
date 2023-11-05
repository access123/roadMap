import React, { useState } from "react";
import "./styles/ButtonLink.css";
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import './styles/Drawer.css'
import { Menu, MenuButton, MenuItem, Dropdown } from '@mui/joy';

const ButtonLink = ({ text = "Button", className, divClassName }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const handleClick = () => {
    openDrawer();
  }
  return (
    <>
      <button className={`button-link ${className}`} onClick={handleClick}>
        <div className={`button ${divClassName}`}>{text}</div>
      </button>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer} className='Sidebar'>
        <div role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
          <div className="con">
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <Dropdown>
            <MenuButton>
              Completion Status
            </MenuButton>
            <Menu>
              <MenuItem>In Progess</MenuItem>
              <MenuItem>Mark as Donw</MenuItem>
            </Menu>
          </Dropdown>
          </div>

          <List>
            <div className="side-data" >
              <h3>Java</h3>
              <p>
                Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
              </p>
            </div>
          </List>
        </div>
      </Drawer>
    </>
  );
};


export default ButtonLink; 