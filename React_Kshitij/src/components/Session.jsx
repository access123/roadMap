import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
function Session() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL you want to fetch data from
    const apiUrl = "http://localhost:3000/session"; // Replace with your desired API URL

    // Make the fetch request when the component mounts
    fetch(apiUrl, {
      method: "GET",
      credentials: "include", // GET request
      headers: {
        "Content-Type": "application/json", // Optional headers
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Fetch Data Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Data from the API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Session;
