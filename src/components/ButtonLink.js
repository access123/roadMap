import React, { useState } from "react";
import "./styles/ButtonLink.css";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import "./styles/Drawer.css";
import { ArrowForward } from "@mui/icons-material";
import { Box, FormLabel, Radio, RadioGroup, Sheet } from "@mui/joy";
const ButtonLink = ({ text = "Button", className, divClassName }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const email = sessionStorage.getItem("email");
  const [status, setStatus] = useState(undefined);
  const obj1 = {
    title: "Java",
    describtion:'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.'
  } // 
  const [data, setData] = useState(obj1);
  const [selectedOption, setSelectedOption] = useState(undefined);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/fetchData", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const drawerData = await response.json();
        setData(drawerData);
      } else {
        console.error("Could not get data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const progress = async () => {
    try {
      const response = await fetch("http://localhost:3000/progress", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, text }),
      });

      if (response.ok) {
        response.json().then((data) => {
          setStatus(data.status);
          if (status === 0) {
            setSelectedOption("In Progress");
          } else {
            setSelectedOption("Completed");
          }
        });
      } else {
        console.error("Could not get progress");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const updateStatus = async () => {
    if (selectedOption === "In Progress") {
      setStatus(0);
    } else {
      setStatus(1);
    }
  };
  const updateProgress = async () => {
    try {
      await updateStatus();
      const response = await fetch("http://localhost:3000/updateProgress", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, text, status }),
      });

      if (response.ok) {
        console.log("Changed");
      } else {
        console.error("Could not update data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const handleClick = () => {
    fetchData();
    progress();
    openDrawer();
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    updateProgress();

    console.log("Selected Option:", event.target.value);
  };
  // const myFunction = () => {
  //   console.log("Component rendered!");
  // };
  // React.useEffect(() => {
  //   progress();
  // }, []);
  return (
    <>
      <button className={`button-link ${className}`} onClick={handleClick}>
        <div className={`button ${divClassName}`}>{text}</div>
      </button>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        className="Sidebar"
      >
        <div role="presentation" onKeyDown={closeDrawer}>
          <div className="con">
            <IconButton>
              <ArrowForward></ArrowForward>
            </IconButton>
            <Box sx={{ width: 200 }}>
              <FormLabel
                id="completion-label"
                sx={{
                  mb: 1,
                  fontWeight: "lg",
                  textTransform: "uppercase",
                  fontSize: "xxs",
                  letterSpacing: "0.1rem",
                }}
              >
                Completion Status
              </FormLabel>
              <RadioGroup
                aria-labelledby="completion-label"
                value={selectedOption}
                onChange={handleOptionChange}
                size="md"
                sx={{ gap: 1, flexDirection: "row" }}
              >
                <Sheet
                  key="In Progress"
                  sx={{
                    p: 1,
                    borderRadius: "sm",
                    boxShadow: "xs",
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
                          fontWeight: "md",
                          fontSize: "sm",
                          color: checked ? "text.primary" : "text.secondary",
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            "--variant-borderWidth": "1px",
                            "&&": {
                              borderColor: theme.vars.palette.primary[500],
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
                <Sheet
                  key="Completed"
                  sx={{
                    p: 1,
                    borderRadius: "sm",
                    boxShadow: "xs",
                  }}
                >
                  <Radio
                    label="Completed"
                    overlay
                    disableIcon
                    value="Completed"
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: "md",
                          fontSize: "sm",
                          color: checked ? "text.primary" : "text.secondary",
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            "--variant-borderWidth": "1px",
                            "&&": {
                              borderColor: theme.vars.palette.success[500],
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
            <div className="side-data">
              <h3>{data.title}</h3>
              <p>
                {data.describtion}
              </p>
            </div>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default ButtonLink;
