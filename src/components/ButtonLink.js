import React from "react";
import "./styles/ButtonLink.css";
import { Routes, Route } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Side from './Side';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";
 const ButtonLink = ({ text = "Button", className, divClassName, onClick  }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const handleClick = () =>{
        openDrawer();
  }
  return (<>
   <Routes>
        <Route path='side' element={<Side />} />
      </Routes>
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
            <Side />
          </List>
        </div>
      </Drawer>
   </>
  );
};


export default ButtonLink; 
