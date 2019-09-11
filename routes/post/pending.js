const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.post("/pending", function(req, res) {
  Community.update(
    { _id: req.body._id },
    { $pull: { asktojoin: { $in: [req.session.data._id] } } },
    function(error, result) {
      if (error) throw error;
      else {
        res.send("1");
      }
    }
  );
});

module.exports = app;
