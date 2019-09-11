const express = require("express");
const app = express.Router();

app.get("/deactivate", function(req, res) {
  if (req.session.islogin == 1) {
    res.render("deactivate", {
      User: req.session.data
    });
  } else {
    res.redirect("login.html");
  }
});

module.exports = app;
