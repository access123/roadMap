// db.js
const mongoose = require('mongoose');

// Replace 'your_database_url' with your actual MongoDB connection string
const databaseUrl = 'mongodb+srv://kshitij2707:Kshitij%4027072003@cluster0.sjo1heh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});