const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.get("/usersearch", function(req, res) {
  User.find({
    _id: req.session._id
  }).then(data => {
    if (data.length != 0) {
      res.render("usersearch", {
        User: data[0]
      });
    } else {
      res.redirect("login.html");
    }
  });
});

module.exports = app;
