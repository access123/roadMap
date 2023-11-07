const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const collName = "_Users"
const User = mongoose.model('User', userSchema,collName);

module.exports = User;
