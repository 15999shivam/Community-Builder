const express = require("express");
const app = express.Router();
const tag = require("../../modals/tag");

app.post("/tag1", function(req, res) {
  tag.create(req.body, function(error, result) {
    if (error) throw error;
    else {
      console.log(result);
    }
  });

  res.send("1");
});

module.exports = app;
