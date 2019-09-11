const express = require("express");
const app = express.Router();

app.get("/profile", function(req, res) {
  if (req.session.islogin == 1) {
    res.render("profile", {
      User: req.session.data
    });
  } else {
    res.redirect("login.html");
  }

  //      var data = User.find({}).exec(function(error,result)
  //      {
  //        if(error)
  //        throw error;
  //        else
  //        res.send(JSON.stringify(result))
  //      });
});

module.exports = app;
