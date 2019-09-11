const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

module.exports = app;

app.post("/updatecommunity", function(req, res) {
  console.log(req.body);
  Community.updateOne(
    { _id: req.body._id },
    {
      $set: {
        communityname: req.body.communityname,
        commstatus: req.body.commstatus
      }
    },
    function(error, result) {
      if (error) throw error;
    }
  );
  res.send("1");
});
