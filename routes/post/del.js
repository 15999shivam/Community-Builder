const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.post("/del", function(req, res) {
  User.updateOne(
    { _id: req.session._id },
    { $set: { del: req.body.del } },
    function(error, result) {
      if (error) throw error;
    }
  );
  res.send("1");
});

module.exports = app;
