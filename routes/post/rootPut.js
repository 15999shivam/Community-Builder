const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.put("/:pro", function(req, res) {
  /*
        console.log(req.body)
        console.log(req.params.pro)*/
  var id = req.params.pro.toString();
  console.log(id);
  User.updateOne({ _id: id }, { $set: req.body.text }, function(err, result) {
    if (err) throw err;
    else {
      res.send("DATA UPDATED SUCCESFULLY");
    }
  });
});

module.exports = app;
