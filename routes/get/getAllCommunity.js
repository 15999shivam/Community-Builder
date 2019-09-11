const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.get("/getallcommunity", function(req, res) {
  var data = Community.find({}).exec(function(error, result) {
    if (error) throw error;
    else res.send(JSON.stringify(result));
  });
});

module.exports = app;
