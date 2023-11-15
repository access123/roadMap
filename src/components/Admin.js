import React, { useState } from "react";
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
  let userArray = [
    {
      userName: "User 1",
      progress: 20,
      quizScore: 75,
      onRoadmap: 10,
    },
    {
      userName: "User 2",
      progress: 40,
      quizScore: 90,
      onRoadmap: 5,
    },
    {
      userName: "User 3",
      progress: 60,
      quizScore: 80,
      onRoadmap: 15,
    },
    {
      userName: "User 4",
      progress: 80,
      quizScore: 95,
      onRoadmap: 25,
    },
    {
      userName: "User 5",
      progress: 100,
      quizScore: 100,
      onRoadmap: 30,
    },
    {
      userName: "User 6",
      progress: 20,
      quizScore: 60,
      onRoadmap: 8,
    },
    {
      userName: "User 7",
      progress: 40,
      quizScore: 85,
      onRoadmap: 12,
    },
    {
      userName: "User 8",
      progress: 45,
      quizScore: 70,
      onRoadmap: 18,
    },
  ];

  const [openDialogs, setOpenDialogs] = useState({});
  const [open, setOpen] = useState(false);

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
                    Quiz Score: {item.quizScore}%
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
