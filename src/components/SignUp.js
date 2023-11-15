import React, { useState } from "react";
import "./styles/Login.css";
import "./styles/Error.css";
import { Link } from "react-router-dom";
import { Input, Button } from "@mui/joy";
import Nav from "./Nav";

const SignUp = () => {
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
  const [conPassword, setConPassword] = useState("");
  const [errors, setErrors] = useState({});
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
    if (!conPassword) {
      newErrors.conpassword = "Confirm Password field is Empty";
    }
    if (password || conPassword) {
      if (password !== conPassword) {
        newErrors.matchErr = "The Passwords entered do not match";
      }
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { email, password });

      try {
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          console.log("Form data submitted successfully");
          navigate("/login");
          createProgress();
          createStats();
        } else {
          console.error("Error submitting form data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  const createProgress = async () => {
    try {
      const response = await fetch("http://localhost:3000/createProgress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Progress Created For" + email);
      } else {
        console.error("Error creating progress");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const createStats = async () => {
    try {
      const response = await fetch("http://localhost:3000/createProgress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Stats Created For" + email);
      } else {
        console.error("Error creating Stats");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Nav titleLink={"Roadmap"} li1={"HOME"} li2={"ABOUT"} li3={"CONTACT"} />

      <div className="Containerp">
        <h3>Create an account</h3>
        <h6>
          Create an account to track your progress, showcase your skill-set and
          be a part of the community.
        </h6>

        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <Input
            className="items-cp"
            type="email"
            color="neutral"
            size="sm"
            variant="outlined"
            sx={{ obj }}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <br />
          <h5 className="items-cp">Password</h5>
          <Input
            className="items-cp"
            type="password"
            color="neutral"
            size="sm"
            variant="outlined"
            sx={{ obj }}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <br />
          <h5 className="items-cp">Confirm Password</h5>
          <Input
            className="items-cp"
            type="password"
            color="neutral"
            size="sm"
            variant="outlined"
            sx={{ obj }}
            onChange={(e) => setConPassword(e.target.value)}
          />
          {errors.conpassword && (
            <div className="error">{errors.conpassword}</div>
          )}
          <br />
          <div className="button-space-p ">
            <Button
              type="submit"
              className="mx-3"
              color="neutral"
              size="md"
              variant="solid"
            >
              Submit
            </Button>
            <Link to="/login">
              <h6>Already have account?</h6>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
