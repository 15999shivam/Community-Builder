const express = require("express");
const app = express.Router();
const User = require("../../modals/user");
const mailer = require("../../utils/mailer");

app.post("/mail", function(req, res) {
  console.log(req.body);
  User.find({
    _id: req.body._id,
    emailid: req.body.emailid
  }).then(data => {
    if (data.length == 0) {
      res.send("0");
    } else {
      mailer(req.body.emailid, req.body.text);
    }

    res.send("1");
  });
});

module.exports = app;
