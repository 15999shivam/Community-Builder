const express = require("express");
const app = express.Router();
const User = require("../../modals/user");
const upload = require("../../utils/upload");

app.post("/photo", function(req, res) {
  console.log("i am requested");
  upload(req, res, err => {
    if (err) {
      throw error;
    } else {
      console.log(req.body);
      function getMonths(monthno) {
        var month = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
        return month[monthno - 1];
      }
      var date = new Date();
      console.log(date);
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      today = +dd + "-" + getMonths(mm) + "-" + yyyy;
      var obj = {
        communityname: req.body.commName,
        rule: req.body.rate,
        location: "Not Added",
        owner: req.session.data.name,
        createdate: today,
        pic: req.photoName,
        desc: req.body.descArea,
        id: req.session.data._id,
        commstatus: "Active"
      };

      //    if(error)
      //        throw error;
      //        })
      let newuser = new Community(obj);
      newuser.save().then(result => {
        User.findOneAndUpdate(
          { _id: req.session._id },
          { $push: { create: result._id } },
          function(error, result) {
            if (error) throw error;
          }
        );
        if (req.session.data.role == "Superadmin")
          res.render("createcommunities", { User: req.session.data });
        else res.render("usercreatecommunities", { User: req.session.data });
      });
    }
  });
});

module.exports = app;
