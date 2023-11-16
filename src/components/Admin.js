import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { UserCard } from "./Card";
import "./styles/Admin.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Admin() {
  const [openDialogs, setOpenDialogs] = useState({});
  const [open, setOpen] = useState(false);
  const [userArray, setUserArray] = useState([]);

  let emailList = [];
  const handleClickOpen = (userName) => {
    setOpenDialogs((prev) => ({ ...prev, [userName]: true }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = {
    marginLeft: "43%",
    fontSize: "2rem",
    color: "black",
    marginTop: "1%",
  };
  const getQuizStat = async (email) => {
    try {
      const response = await fetch("http://localhost:3000/getQuizstat", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const quizobj = await response.json();
        return quizobj;
      } else {
        console.error("Could not get stat");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getRmprog = async (email) => {
    try {
      const response = await fetch("http://localhost:3000/addRMprogress", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const rmObj = await response.json();
        return rmObj;
      } else {
        console.error("Could not get rmprog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/getUsers", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const emails = await response.json();
        emailList = emails.emails;
        console.log(emailList);
      } else {
        console.error("Could not get emails");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchData = async () => {
    try {
      await getUsers();

      const getStatsPromises = emailList.map(async (email) => {
        const quizObj = await getQuizStat(email);
        const rmObj = await getRmprog(email);
        console.log(rmObj);
        let progress = parseInt(rmObj.rmpercent);
        let onRoadmap = parseInt(rmObj.rmprog);
        let userName = email;
        let quizScore = parseInt(quizObj.Datasructures);
        let userObject = {
          progress: progress,
          onRoadmap: onRoadmap,
          userName: userName,
          quizScore: quizScore,
        };
        const existingUserIndex = userArray.findIndex(
          (user) => user.userName === userName
        );
        if (existingUserIndex !== -1) {
          // User already exists, update values
          userArray[existingUserIndex].progress = progress;
          userArray[existingUserIndex].onRoadmap = onRoadmap;
          userArray[existingUserIndex].quizScore = quizScore;
        } else {
          // User doesn't exist, add new user
          let userObject = {
            progress: progress,
            onRoadmap: onRoadmap,
            userName: userName,
            quizScore: quizScore,
          };
          setUserArray((prevArray) => [...prevArray, userObject]);
        }
      });

      await Promise.all(getStatsPromises);

      console.log("Done");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav titleLink={"Roadmap"} li1={"HOME"} li2={"ABOUT"} li3={""} />
      <h1 style={styles}>Admin Panel</h1>
      <div className="con">
        {userArray.map((item) => (
          <React.Fragment key={item.userName}>
            <UserCard
              userName={item.userName}
              progress={item.progress}
              onClick={() => {
                setOpen(true);
                handleClickOpen(item.userName);
              }}
            />
            {open && (
              <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                onClose={() => handleClose(item.userName)}
                open={openDialogs[item.userName] || false}
              >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  {item.userName}
                </DialogTitle>
                <DialogContent dividers>
                  <Typography gutterBottom>
                    Progress: {item.progress}%
                  </Typography>
                  <Typography gutterBottom>
                    Quiz Score: {item.quizScore}/10
                  </Typography>
                  <Typography gutterBottom>
                    On Roadmap: {item.onRoadmap}/30
                  </Typography>
                  <Typography gutterBottom>
                    Last Login: {Math.floor(Math.random() * 3) + 2021}-
                    {Math.floor(Math.random() * 12) + 1}-
                    {Math.floor(Math.random() * 28) + 1}
                  </Typography>
                  <Typography gutterBottom>Email: xyz@gmail.com</Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={() => handleClose()}>
                    Close
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Admin;
