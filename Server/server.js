const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session')

// Import the database connection
require('./dbconnect');
const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
  methods:["GET","POST"],
  credentials:true
}))
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
const User = require('./models');

app.use(session({
  key:"userId",
  secret : "test",
  resave: false,
  saveUninitialized: true,
    
}))

function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    // User is authenticated
    return next();
  }
  // User is not authenticated, redirect or send an error response
  res.status(401).send('Unauthorized');
}

app.get('/authenticate',isAuthenticated,(req,res) =>{
  res.status(200).send('Authorized');
})
app.get('/session',isAuthenticated, (req,res) => {
  res.json({user : req.session.user})
})

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    
    await user.save();

    res.sendStatus(201); // Created
  } catch (error) {
    console.error('Error creating user:', error);
    res.sendStatus(500); // Internal Server Error
  }
});




app.post('/login', async (req,res) =>{

  const { username, password } = req.body;
  try {
    // Find the user in the database
    const user = await User.findOne({ username, password });

    if (user) {
      const isPasswordValid =  bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        req.session.user = req.body
        console.log(req.session.user)
        return res.status(200).json({ error: 'Login Succesfull' });
      }
      else{res.status(401).send('Incorrect password')}
    } else {
      res.status(401).send('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('An error occurred during login');
  }
})
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});