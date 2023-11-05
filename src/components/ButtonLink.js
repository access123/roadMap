import React, { useState } from "react";
import "./styles/ButtonLink.css";
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
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
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        className='Sidebar'
      >
        <div
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <List>
            <div className="side-data" style={{width:'250px'}}>
              <h3>Java</h3>
              <h5 style={{textAlign:'justify'}}>
                Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
              </h5>
              <br />
            </div>
          </List>
        </div>
      </Drawer>
    </>
  );
};


export default ButtonLink; 