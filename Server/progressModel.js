const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    sparse: true,
    unique: true,
  },
  progress: Object,
});
const collName = "_UserProgress";
const Progress = mongoose.model("Progress", progressSchema, collName);

module.exports = Progress;
