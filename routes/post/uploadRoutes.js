const express = require("express");
const app = express.Router();
const User = require("../../modals/user");
const upload = require("../../utils/upload");

app.get("/", (req, res) => {
  res.redirect("login.html");
});

app.post("/upload", (req, res) => {
  upload(req, res, err => {
    if (err) {
      throw error;
    } else {
      console.log(req.file);
      console.log(req.photoName);
      console.log(req.session.data._id);

      User.updateOne(
        { _id: req.session._id },
        { $set: { photoname: req.photoName } },
        function(error, result) {
          console.log(result);
          if (error) {
            console.log("error vale mai");
            throw error;
          } else {
            console.log("update vale mai");
            req.session.data.photoname = req.photoName;
            console.log(req.session.data);
            console.log(req.session.data.photoname);
            User.find({
              _id: req.session._id
            }).then(data => {
              if (data.length != 0) {
                if (data[0].role == "Superadmin")
                  res.render("profile", { User: data[0] });
                else {
                  console.log(req.session.data.first);
                  if (data[0].first == "true")
                    res.render("firstuser", { User: data[0] });
                  else res.render("userprofile", { User: data[0] });
                }
              }
            });
          }
        }
      );
    }
  });
});

app.post("/upload1", (req, res) => {
  upload(req, res, err => {
    if (err) {
      throw error;
    } else {
      console.log(req.file);
      console.log(req.photoName);
      console.log(req.session.data._id);

      User.updateOne(
        { _id: req.session._id },
        { $set: { photoname: req.photoName } },
        function(error, result) {
          console.log(result);
          if (error) {
            console.log("error vale mai");
            throw error;
          } else {
            console.log("update vale mai");
            req.session.data.photoname = req.photoName;
            console.log(req.session.data);
            console.log(req.session.data.photoname);
            res.render("adminprofile", { User: req.session.data });
          }
        }
      );
    }
  });
});

module.exports = app;
