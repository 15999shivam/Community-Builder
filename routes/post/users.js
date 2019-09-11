const express = require("express");
const app = express.Router();
const User = require("../../modals/user");

app.post("/users", function(req, res) {
  // console.log("\n\n\n" + req.body.search.value + "\n\n\n");
  let query = {};
  let params = {};
  console.log(req.body.order);
  if (req.body.role === "All" && req.body.status !== "All") {
    query = { status: req.body.status };
  } else if (req.body.role !== "All" && req.body.status === "All") {
    query = { role: req.body.role };
  } else if (req.body.role !== "All" && req.body.status !== "All") {
    query = { role: req.body.role, status: req.body.status };
  }

  let sortingType;
  if (req.body.order[0].dir === "asc") sortingType = 1;
  else sortingType = -1;

  if (req.body.order[0].column === "0") {
    params = {
      skip: parseInt(req.body.start),
      limit: parseInt(req.body.length),
      sort: { emailid: sortingType }
    };
  } else if (req.body.order[0].column === "2") {
    params = {
      skip: parseInt(req.body.start),
      limit: parseInt(req.body.length),
      sort: { city: sortingType }
    };
  } else if (req.body.order[0].column === "3") {
    params = {
      skip: parseInt(req.body.start),
      limit: parseInt(req.body.length),
      sort: { status: sortingType }
    };
  } else if (req.body.order[0].column === "4") {
    params = {
      skip: parseInt(req.body.start),
      limit: parseInt(req.body.length),
      sort: { role: sortingType }
    };
  }
  console.log(params);
  User.find(query, {}, params, function(err, data) {
    if (err) {
      console.log(err);
      return;
    } else console.log(data);
    User.countDocuments(async function(err, count) {
      if (err) {
        console.log(err);
      } else {
        if (req.body.search.value) {
          let sara = await User.find({});
          data = sara.filter(value => {
            console.log(value);
            return (
              value.emailid.includes(req.body.search.value) ||
              value.phoneno.includes(req.body.search.value) ||
              value.city.includes(req.body.search.value) ||
              value.status.includes(req.body.search.value) ||
              value.role.includes(req.body.search.value)
            );
          });
        }
        res.send({ recordsTotal: count, recordsFiltered: count, data });
      }
    });
  });
});

module.exports = app;
