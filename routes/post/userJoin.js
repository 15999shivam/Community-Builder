const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.post("/userjoin", function(req, res) {
  console.log(req.body);
  Community.findOneAndUpdate(
    { _id: req.body._id },
    { $push: { join: req.session._id, member: "1" } },
    function(error, result) {
      if (error) throw error;
    }
  );
  res.send("1");
});

module.exports = app;
