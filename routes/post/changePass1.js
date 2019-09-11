const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.post("/changepass1", function(req, res) {
  console.log(req.body);
  console.log(req.session.password);
  if (req.body.oldpass != req.session.password) res.send("0");
  else {
    User.updateOne(
      { _id: req.session._id },
      { $set: { password: req.body.newpass } },
      function(error, result) {
        if (error) throw error;
      }
    );
    res.send("1");
  }
});

module.exports = app;
