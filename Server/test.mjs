
import fetch from 'node-fetch';

// Define the URL for the POST and GET requests
const postUrl = 'http://localhost:3000/login'; // Replace with your POST API endpoint
const getUrl = 'http://localhost:3000/session';   // Replace with your GET API endpoint

// Define the JSON data for the POST request
const postData = {
  username: 'kshitij',
  password: 'value2',
};

// Define the request options for the POST request
const postRequestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
};

// Send the POST request
fetch(postUrl, postRequestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok 1');
    }
    return response.json();
  })
  .then((data) => {
    console.log('POST Response Data:', data);

    // Introduce a delay of 3 seconds (3000 milliseconds) before sending the GET request
    setTimeout(() => {
      // Send the GET request
      fetch(getUrl)
        .then((getResponse) => {
          if (!getResponse.ok) {
            throw new Error('Network response was not ok');
          }
          return getResponse.json();
        })
        .then((getData) => {
          console.log('GET Response Data:', getData);
        })
        .catch((getError) => {
          console.error('GET Error:', getError);
        });
    }, 3000); // 3 seconds delay for the GET request
  })
  .catch((error) => {
    console.error('POST Error:', error);
  });
