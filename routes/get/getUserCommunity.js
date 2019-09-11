const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.get("/getusercommunity", function(req, res) {
  Community.find({
    $or: [
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
