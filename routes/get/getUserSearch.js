const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.get("/getusersearch", function(req, res) {
  Community.find({
    $and: [
      { join: { $nin: [req.session.data._id] } },
      { asktojoin: { $nin: [req.session.data._id] } }
    ]
  }).exec(function(error, result) {
    if (error) throw error;
    else {
      res.send(JSON.stringify(result));
    }
  });
});

module.exports = app;
