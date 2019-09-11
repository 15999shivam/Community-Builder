const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.get("/usercommunityprofile/:pro", function(req, res) {
  if (req.session.islogin == 1) {
    var comid = req.params.pro.toString();
    Community.findOne({ _id: comid }, function(err, result) {
      if (err) throw err;
      else {
        User.findOne({ _id: result.id }, function(err, result1) {
          if (err) throw err;
          else
            res.render("usercommunityprofile", {
              User: req.session.data,
              obj: result,
              own: result1
            });
        });
      }
    });
  } else {
    res.redirect("login.html");
  }
});

module.exports = app;
