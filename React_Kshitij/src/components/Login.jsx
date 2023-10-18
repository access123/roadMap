import React, { useEffect, useState } from "react";
import "../styles/Login.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const authenticate = async () => {
    try {
      const response = await fetch("http://localhost:3000/authenticate", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        navigate("/welcome");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can implement login logic here

    if (validateForm()) {
      console.log("Login submitted:", { username, password });

      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          setErrorMessage("");
          console.log("Login successful");
          sessionStorage.setItem("username", username);
          navigate("/welcome");
        } else {
          setErrorMessage("Invalid username or password");
          console.error("Error submitting form data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };
  useEffect(() => {
    authenticate();
  }, []);
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
