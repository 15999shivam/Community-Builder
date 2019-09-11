const express = require("express");
const app = express.Router();

app.get("/getTagTable", function(req, res) {
  var data = tag.find({}).exec(function(error, result) {
    if (error) throw error;
    else res.send(JSON.stringify(result));
  });
});

module.exports = app;
