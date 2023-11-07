import React from 'react';
import Nav from './Nav';
import './styles/Guide.css';
import { Drawer, List, ListItem } from '@mui/material';
import Data from './Assets/Data.json';
function Guide() {
  const title = 'Guide';
  const info = 'This is the guide page';
  const linksArray = Data;
  const [Title, setTitle] = React.useState(title);
  const [Desc, setDesc] = React.useState(info);
  return (
    <>
      <Nav titleLink={'Roadmap'} li1={'HOME'} li2={'ABOUT'} li3={'CONTACT'} />
      <Drawer variant="permanent" anchor="left">
        <div className="box">
          <List>
            <br />
            {linksArray.map((item) => (
              <ListItem key={item.id}>
                <button className='links' onClick={() => {
                  setTitle(item.title)
                  setDesc(item.description)
                }}>
                  {item.title}
                </button >
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className="middle">
        <h1>
          {Title}
        </h1>
        <hr />
        <p style={{ fontSize: '23px' }}>
          {Desc}
        </p>
      </div>
    </>
  );
}

export default Guide;
