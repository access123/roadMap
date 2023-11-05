import React, { useState } from "react";
import "./styles/ButtonLink.css";
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import './styles/Drawer.css'
import { ArrowForward } from "@mui/icons-material";
import { Box, FormLabel, Radio, RadioGroup, Sheet } from '@mui/joy';
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
  const [selectedOption, setSelectedOption] = useState('In Progress');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      console.log('Selected Option:', event.target.value);
    };
  return (
    <>
      <button className={`button-link ${className}`} onClick={handleClick}>
        <div className={`button ${divClassName}`}>{text}</div>
      </button>
      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer} className='Sidebar'>
        <div role="presentation" onClick={closeDrawer} onKeyDown={closeDrawer}>
          <div className="con">
          <IconButton>
              <ArrowForward></ArrowForward>
          </IconButton>
            <Box sx={{ width: 200 }}>
              <FormLabel
                id="completion-label"
                sx={{
                  mb: 1,
                  fontWeight: 'lg',
                  textTransform: 'uppercase',
                  fontSize: 'xxs',
                  letterSpacing: '0.1rem',
                }}
              >
                Completion Status
              </FormLabel>
              <RadioGroup
                aria-labelledby="completion-label"
                value={selectedOption}
                onChange={handleOptionChange}
                size="md"
                sx={{ gap: 1 }}
              >
                <Sheet
                  key="In Progress"
                  sx={{
                    p: 1,
                    borderRadius: 'sm',
                    boxShadow: 'xs',
                  }}
                >
                  <Radio
                    label="In Progress"
                    overlay
                    disableIcon
                    value="In Progress"
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: 'md',
                          fontSize: 'sm',
                          color: checked ? 'text.primary' : 'text.secondary',
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            '--variant-borderWidth': '1px',
                            '&&': {
                              borderColor: theme.vars.palette.primary[500],
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
                <Sheet
                  key="Pending"
                  sx={{
                    p: 1,
                    borderRadius: 'sm',
                    boxShadow: 'xs',
                  }}
                >
                  <Radio
                    label="Pending"
                    overlay
                    disableIcon
                    value="Pending"
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: 'md',
                          fontSize: 'sm',
                          color: checked ? 'text.primary' : 'text.secondary',
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            '--variant-borderWidth': '1px',
                            '&&': {
                              borderColor: theme.vars.palette.primary[500],
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              </RadioGroup>
            </Box>
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