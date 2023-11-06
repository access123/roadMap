import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './styles/Guide.css';
import { Drawer, List, ListItem } from '@mui/material';
import Data from './Assets/Data.json';

function Guide() {
  const title = 'Guide';
  const info = 'This is the guide page';
  const linksArray = Data; 

  return (
    <>
      <Nav titleLink={'Roadmap'} li1={'HOME'} li2={'ABOUT'} li3={'CONTACT'} />
      <Drawer variant="permanent" anchor="left">
        <div className="box">
          <List>
            <br />
            {linksArray.map((item) => (
              <ListItem key={item.id}>
                <Link className='links' to='#'>
                  {item.title}
                </Link>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className="middle">
        <h1>
          {title}
        </h1>
        <hr />
        <p style={{ fontSize: '23px' }}>
          {info}
        </p>
      </div>
    </>
  );
}

export default Guide;
