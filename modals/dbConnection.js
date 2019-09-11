const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/project", {
  useNewUrlParser: true,
  useFindAndModify: false
});
mongoose.connection.on("error", err => {
  console.log("DB connection Error");
});

mongoose.connection.on("connected", err => {
  console.log("DB connected");
});
