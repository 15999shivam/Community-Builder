const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.get("/adminpersonalprofile", function(req, res) {
  User.find({
    _id: req.session._id
  }).then(data => {
    if (data.length != 0) {
      res.render("adminpersonalprofile", {
        User: data[0]
      });
    } else {
      res.redirect("login.html");
    }
  });
});

module.exports = app;
