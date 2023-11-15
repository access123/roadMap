import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "@mui/joy";
import "./styles/Login.css";
import Nav from "./Nav";
import "./styles/Error.css";
import ReportIcon from "@mui/icons-material/Report";
import Alert from "@mui/joy/Alert";
const Login = () => {
  let obj = {
    "--Input-focusedInset": "var(--any, )",
    "--Input-focusedThickness": "0.25rem",
    "--Input-focusedHighlight": "rgba(13,110,253,.25)",
    "&::before": {
      transition: "box-shadow .15s ease-in-out",
    },
    "&:focus-within": {
      borderColor: "#86b7fe",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login submitted:", { email, password });

      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          setErrorMessage("");
          console.log("Login successful");
          sessionStorage.setItem("email", email);
          console.log("email:", email);
          navigate("/");
        } else {
          setErrorMessage("Invalid username or password");
          console.error("Invalid username or password");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  return (
    <div>
      <Nav titleLink={"Roadmap"} li1={"HOME"} li2={"ABOUT"} li3={""} />

      <div className="Container">
        <h3>Login</h3>
        {errorMessage && (
          <Alert
            size="md"
            variant="soft"
            color="danger"
            startDecorator={<ReportIcon />}
          >
            {errorMessage}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <Input
            className="items-c"
            type="email"
            color="neutral"
            size="lg"
            variant="outlined"
            sx={{ obj }}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <br />
          <h5 className="items-c">Password</h5>
          <Input
            className="items-c"
            type="password"
            color="neutral"
            size="lg"
            variant="outlined"
            sx={{ obj }}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <br />
          <div className="button-space">
            <Button
              className="mx-3"
              type="submit"
              color="neutral"
              size="sm"
              variant="solid"
            >
              Submit
            </Button>
            <Link to="/signup">
              <h6>Register Now</h6>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
