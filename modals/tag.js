const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  tagname: String,
  created: String,
  date1: String,
  delete: String
});

const tag = mongoose.model("tags", tagSchema);

module.exports = tag;
