import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles/Card.css";
const UserCard = ({ userName, progress, onClick }) => {
  return (
    <Card className="space" size="sm" color="neutral" variant="soft">
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" component="div">
            {userName}
          </Typography>
          <CircularProgress variant="determinate" value={progress} />
        </div>
      </CardContent>
      <CardActions>
        <Button
          className="animate"
          size="sm"
          variant="solid"
          color="neutral"
          onClick={onClick}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};
export { UserCard };
