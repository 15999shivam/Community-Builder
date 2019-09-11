const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.post("/updateuserlist", function(req, res) {
  console.log(req.body);
  User.updateOne(
    { _id: req.body._id },
    {
      $set: {
        emailid: req.body.emailid,
        phoneno: req.body.phoneno,
        city: req.body.city,
        status: req.body.status,
        role: req.body.role
      }
    },
    function(error, result) {
      if (error) throw error;
    }
  );
  res.send("1");
});

module.exports = app;
