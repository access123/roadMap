const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const progressObj = {
  "More Concepts": 0,
  "Learn The Fundamentals": 0,
  Generics: 0,
  Streams: 0,
  "Basic Syntax": 0,
  Datastructures: 0,
  "Datatypes,Variables": 0,
  "OOP,Interfaces,Classes": 0,
  Conditionals: 0,
  Packages: 0,
  Functions: 0,
  "Memory Management": 0,
  "Collection Framework": 0,
  Serialization: 0,
  "Network and scokets": 0,
  Loops: 0,
  "Exception Handling": 0,
  "Working with Files": 0,
  JVM: 0,
  "Garbage collection": 0,
  "Basics of threads": 0,
  "Build Tools": 0,
  "Web Frameworks": 0,
  Gradle: 0,
  Spring: 0,
  "Spring Boot": 0,
  "Play Framework": 0,
  Spark: 0,
  Maven: 0,
  Ant: 0,
};

// Import the database connection
require("./dbconnect");
const app = express();
const allowedOrigins = ["http://localhost:5173", "http://localhost:3001"];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
const User = require("./models");
const Progress = require("./progressModel");
const Data = require("./dataModel");
app.use(
  session({
    key: "userId",
    secret: "test",
    resave: false,
    saveUninitialized: true,
  })
);

function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    // User is authenticated
    return next();
  }
  // User is not authenticated, redirect or send an error response
  res.status(401).send("Unauthorized");
}

app.get("/authenticate", isAuthenticated, (req, res) => {
  res.status(200).send("Authorized");
});
app.get("/session", isAuthenticated, (req, res) => {
  res.json({ user: req.session.user });
});

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email: email,
      password: hashedPassword,
    });

    await user.save();

    res.sendStatus(201); // Created
  } catch (error) {
    console.error("Error creating user:", error);
    res.sendStatus(500); // Internal Server Error
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user in the database

    const user = await User.findOne({ email });

    if (user) {
      const isPasswordValid = bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        req.session.user = req.body;
        console.log(req.session.user.email);
        return res.status(200).json({ error: "Login Succesfull" });
      } else {
        console.log("Here");
        res.status(401).send("Incorrect password");
      }
    } else {
      res.status(401).send("Login failed");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("An error occurred during login");
  }
});

app.post("/createProgress", async (req, res) => {
  try {
    const { email } = req.body;

    const user = new Progress({
      email: email,
      progress: progressObj,
    });

    await user.save();

    res.sendStatus(201);
    console.log("Progress Created"); // Created
  } catch (error) {
    console.error("Error creating Progress:", error);
    res.sendStatus(500); // Internal Server Error
  }
});

app.post("/progress", (req, res) => {
  const { email, text } = req.body;
  const key = text;
  Progress.findOne({ email: email })
    .exec()
    .then((user) => {
      if (user) {
        res.json({ status: user.progress[key] });
        console.log({ field: key, stat: user.progress[key] });
        // res.sendStatus(201);
      } else {
        console.log(`User ${email} not found or progress key not found.`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

app.post("/updateProgress", async (req, res) => {
  try {
    const { email, text, status } = req.body;
    const key = text;
    const doc = await Progress.findOneAndUpdate(
      { email: email },
      { $set: { [`progress.${key}`]: status } },
      { new: true }
    );
    console.log(doc);

    // Send a response if needed
    res.status(200).json({ message: "Progress updated successfully" });
  } catch (error) {
    // Handle any errors that occur during the execution
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating progress" });
  }
});

app.post("/fetchData", (req, res) => {
  const { text } = req.body;
  const key = text;
  Data.findOne({ key: key })
    .exec()
    .then((data) => {
      if (data) {
        return res.status(200).json(data.data);
      } else {
        console.log();
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

app.post("/insertData", async (req, res) => {
  try {
    const { text, dataobj } = req.body;
    const key = text;

    const data = new Data({
      key: key,
      data: dataobj,
    });

    await data.save();

    res.sendStatus(201);
    console.log("Data Inserted"); // Created
  } catch (error) {
    console.error("Error inserting data:", error);
    res.sendStatus(500); // Internal Server Error
  }
});

app.get("/userData", async (req, res) => {
  try {
    const results = await User.find({}, "email");
    const valueArray = results.map((result) => result.email);

    res.json({ values: valueArray }); // Sending the array as a JSON response
  } catch (error) {
    console.error("An error occurred:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching values" });
  }
});
app.post("/userProgress", (req, res) => {
  const { email } = req.body;
  Progress.findOne({ email: email })
    .exec()
    .then((user) => {
      if (user) {
        res.json(user.progress);

        // res.sendStatus(201);
      } else {
        console.log(`User ${email} not found or progress key not found.`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
