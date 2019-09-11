const express = require("express");
const app = express.Router();
Community = require("../../modals/community");

app.get("/getsearch", function(req, res) {
  Community.find({
    $and: [
      { id: { $not: { $eq: req.session.data._id } } },
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
