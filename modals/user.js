const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  emailid: String,
  password: String,
  city: String,
  dob: String,
  phoneno: String,
  gender: String,
  role: String,
  status: String,
  restrict: Number,
  first: Boolean,
  photoname: String,
  create: Array
});

var User = mongoose.model("Users", userSchema);

module.exports = User;
