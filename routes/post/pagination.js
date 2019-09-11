const express = require("express");
const app = express.Router();
const Community = require("../../modals/community");

app.post("/pagination", function(req, res) {
  // console.log("\n\n\n" + req.body.search.value + "\n\n\n");
  let query = {};
  let params = {};
  console.log(req.body.order);
  if (req.body.rule !== "All") {
    query = { rule: req.body.rule };
  }

  let sortingType;
  if (req.body.order[0].dir === "asc") sortingType = 1;
  else sortingType = -1;

  if (req.body.order[0].column === "0") {
    params = {
      skip: parseInt(req.body.start),
      limit: parseInt(req.body.length),
      sort: { communityname: sortingType }
    };
  } else if (req.body.order[0].column === "2") {
    params = {
      skip: parseInt(req.body.start),
      limit: parseInt(req.body.length),
      sort: { location: sortingType }
    };
  } else if (req.body.order[0].column === "3") {
    params = {
      skip: parseInt(req.body.start),
      limit: parseInt(req.body.length),
      sort: { owner: sortingType }
    };
  } else if (req.body.order[0].column === "4") {
    params = {
      skip: parseInt(req.body.start),
      limit: parseInt(req.body.length),
      sort: { createdate: sortingType }
    };
  }
  console.log(params);
  Community.find(query, {}, params, function(err, data) {
    if (err) {
      console.log(err);
      return;
    } else console.log(data);
    Community.countDocuments(async function(err, count) {
      if (err) {
        console.log(err);
      } else {
        if (req.body.search.value) {
          let sara = await Community.find({});
          data = sara.filter(value => {
            console.log(value);
            return (
              value.communityname.includes(req.body.search.value) ||
              value.rule.includes(req.body.search.value) ||
              value.location.includes(req.body.search.value) ||
              value.owner.includes(req.body.search.value) ||
              value.createdate.includes(req.body.search.value)
            );
          });
        }
        res.send({ recordsTotal: count, recordsFiltered: count, data });
      }
    });
  });
});

module.exports = app;
