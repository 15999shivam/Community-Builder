const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.post("/restrict", function(req, res) {
  console.log(req.body);
  User.updateOne(
    { _id: req.body._id },
    { $set: { restrict: req.body.restrict } },
    function(error, result) {
      if (error) throw error;
    }
  );
  if (req.body.restrict == "0") res.send("1");
  else res.send("0");
});

module.exports = app;
