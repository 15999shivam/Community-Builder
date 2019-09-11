const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.get("/adminpersonalprofile/:pro", function(req, res) {
  if (req.session.islogin == 1) {
    var comid = req.params.pro.toString();
    User.findOne({ _id: comid }, function(err, result) {
      if (err) throw err;
      else
        res.render("adminpersonalprofile", {
          User: req.session.data,
          obj: result
        });
    });
  } else {
    res.redirect("login.html");
  }
});

module.exports = app;
