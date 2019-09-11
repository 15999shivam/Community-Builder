const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.get("/adminsetting/:pro", function(req, res) {
  if (req.session.islogin == 1) {
    var comid = req.params.pro.toString();
    Community.findOne({ _id: comid }, function(err, result) {
      if (err) throw err;
      else res.render("adminsetting", { User: req.session.data, obj: result });
    });
  } else {
    res.redirect("login.html");
  }
});

module.exports = app;
