const express = require("express");
const app = express.Router();
const tag = require("../../modals/tag");

app.post("/tagdelete", function(req, res) {
  console.log(req.body.del);
  tag.updateOne(
    { _id: req.body.id },
    { $set: { delete: req.body.del } },
    function(error, result) {
      if (error) throw error;
    }
  );
  res.send("1");
});

module.exports = app;
