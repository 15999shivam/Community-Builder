const express = require("express");
const app = express.Router();
const User = require("../../modals/user");
const upload = require("../../utils/upload");

app.post("/changepass2", function(req, res) {
  console.log(req.body);
  if (req.session.data.photoname == "default.png") res.send("0");
  else {
    User.updateOne(
      { _id: req.session._id },
      {
        $set: {
          name: req.body.name1,
          dob: req.body.dob,
          gender: req.body.gender,
          phoneno: req.body.phoneno,
          city: req.body.city,
          first: false
        }
      },
      function(error, result) {
        if (error) throw error;
        else res.send("1");
      }
    );
  }
});

module.exports = app;
