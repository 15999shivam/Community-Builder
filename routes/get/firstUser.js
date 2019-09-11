const express = require("express");
const app = express.Router();

app.get("/firstuser", function(req, res) {
  if (req.session.islogin == 1) {
    console.log(req.session.data);
    res.render("firstuser", {
      User: req.session.data
    });
  } else {
    res.redirect("login.html");
  }
});

module.exports = app;
