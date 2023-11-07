const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    sparse: true,
    unique: true,
  },
  data: Object,
});
const collName = "_Data";
const Data = mongoose.model("Data", dataSchema, collName);

module.exports = Data;
