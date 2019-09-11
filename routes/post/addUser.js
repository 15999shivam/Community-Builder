const express = require("express");
const app = express.Router();
const User = require("../../modals/user");
const nodemailer = require("nodemailer");

//add user
app.post("/adduser1", function(req, res) {
  console.log(req.body);
  User.find({
    emailid: req.body.emailid
  }).then(data => {
    if (data.length != 0) {
      res.send("0");
    } else {
      User.create(req.body, function(error, result) {
        if (error) throw error;
        else {
          var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "codercommunityproject@gmail.com",
              pass: "lala@coder"
            }
          });

          var mailOptions = {
            from: "nishantsaini86066@gmail.com",
            to: req.body.emailid,
            subject: "Hi How are you",
            text:
              "You are successfully added in Coder's community Emailid->" +
              req.body.emailid +
              " Password->" +
              req.body.password
          };

          // transporter.sendMail(mailOptions, function(error, info) {
          //   if (error) {
          //     console.log(error);
          //   } else {
          //     console.log("Email sent: " + info.response);
          //   }
          // });
        }
      });

      res.send("1");
    }
  });
});

module.exports = app;
