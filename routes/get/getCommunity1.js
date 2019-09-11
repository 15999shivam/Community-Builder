const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.get("/getcommunity", function(req, res) {
  Community.find({
    $or: [
      { id: req.session.data._id },
      { join: { $in: [req.session.data._id] } },
      { asktojoin: { $in: [req.session.data._id] } }
    ]
  }).exec(function(error, result) {
    if (error) throw error;
    else {
      res.send(JSON.stringify(result));
    }
  });
});

module.exports = app;
