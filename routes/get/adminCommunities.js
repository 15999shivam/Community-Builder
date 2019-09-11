const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.get("/admincommunities", function(req, res) {
  User.find({
    _id: req.session._id
  }).then(data => {
    if (data.length != 0) {
      res.render("admincommunities", {
        User: data[0]
      });
    } else {
      res.redirect("login.html");
    }
  });
});

module.exports = app;
