const express = require("express");
const app = express.Router();

app.get("/usercommunities", function(req, res) {
  if (req.session.islogin == 1) {
    res.render("usercommunities", {
      User: req.session.data
    });
  } else {
    res.redirect("login.html");
  }
});

module.exports = app;
