import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './styles/Roadmap.css';
import Side from './Side';
import Nav from './Nav';
export default function Roadmap() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <Nav titleLink={'Roadmap'} li1={'HOME'} li2={'ABOUT'} li3={'CONTACT'} />

      <Routes>
        <Route path='side' element={<Side />} />
      </Routes>
      <div className="Big">
        <h1>
          Roadmap
        </h1>
        <div className="Roadmap-container rounded-border-gradient">
          <div className="Roadmap-items">
            <div className="items-left">
              <button type="button" class="btn btn-outline-dark space" onClick={openDrawer}>Basic Syntax</button>
              <button type="button" class="btn btn-outline-dark space" >Data Type Variables</button>

              <button type="button" class="btn btn-outline-dark space">Conditions</button>

              <button type="button" class="btn btn-outline-dark space">Functions</button>
              <br />
              <button type="button" class="btn btn-outline-dark space">Memory Management</button>

              <button type="button" class="btn btn-outline-dark space">Collection Framework</button>

              <button type="button" class="btn btn-outline-dark space">Serializtion</button>

              <button type="button" class="btn btn-outline-dark space">Network and sockets</button>
            </div>
            <div className="items-mid">
            
              <h3 className='dotted-oval'>Start</h3>  
              <h4>Java</h4>
              <h5 className="space colored">Learning the fundamentals</h5>
              <br />
              <br />
              <h5 className="space colored">Loops</h5>
              <h5 className="space colored">Exception Handling</h5>
              <br />
              <br />
              <h5 className="space colored">More Concepts</h5>
              <br />
              <button type="button" class="btn btn-outline-dark space">Streams</button>
            </div>
            <div className="items-right">
              <button type="button" class="btn btn-outline-dark space">Data Structures</button>

              <button type="button" class="btn btn-outline-dark space">OOP, Interface</button>

              <button type="button" class="btn btn-outline-dark space">Package</button>

              <button type="button" class="btn btn-outline-dark space">Working with Files</button>
              <br /><br />
              <button type="button" class="btn btn-outline-dark space">JVM</button>
              <button type="button" class="btn btn-outline-dark space">Garbage Collection</button>
              <button type="button" class="btn btn-outline-dark space">Bacics of threads</button>
            </div>
          </div>
        </div>
      </div>
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
}