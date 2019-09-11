const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.delete("/:pro", function(req, res) {
  var id = req.params.pro.toString();
  console.log(id);
  User.deleteOne({ _id: id }, function(err, result) {
    if (err) throw error;
    else {
      console.log(result);
      res.send("data deleted SUCCESFULLY");
    }
  });
});

module.exports = app;
