const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.post("/login", function(req, res) {
  console.log(req.body);

  User.find({
    emailid: req.body.username1,
    password: req.body.pass1
  })
    .then(data => {
      console.log(data);
      if (data.length != 0) {
        if (data[0].restrict == 1) {
          req.session.islogin = 1;
          req.session.name = data[0].name;
          req.session.emailid = data[0].emailid;
          req.session._id = data[0]._id;
          req.session.password = data[0].password;
          req.session.data = data[0];
          if (data[0].role == "Superadmin") {
            res.send("1");
          } else {
            if (data[0].first == false) {
              if (data[0].role == "User") res.send("user");
              else res.send("new");
            } else res.send("update");
          }
        } else res.send("-1");
      } else res.send("0");
    })

    .catch(err => {
      res.send(error);
    });
  /* User.create(req.body,function(error,result)
    {
      if(error)
      throw error;
      else
      {
        console.log(result);
      }
    })*/

  //res.send("data has been saved");
});

module.exports = app;
