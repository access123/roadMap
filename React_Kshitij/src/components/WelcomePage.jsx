import React, { useEffect, useState } from "react";

function WelcomePage() {
  // Define a state variable to store the username
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve the username from sessionStorage
    const storedUsername = sessionStorage.getItem("username");

    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {username || "Guest"}!</h1>
      <p>Thank you for visiting our website.</p>
      <p>This is your personalized welcome page.</p>
    </div>
  );
}

export default WelcomePage;
