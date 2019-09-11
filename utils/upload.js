const multer = require("multer");
const path = require("path");

var photoName;

var storage = multer.diskStorage({
  destination: "./public",
  filename: function(req, file, callback) {
    req.photoName =
      "/" +
      file.fieldname +
      "-" +
      Date.now() +
      "@" +
      path.extname(file.originalname);
    console.log("ye abhi wala consolehai" + req.photoName);
    callback(null, req.photoName);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    console.log("ye apun ka test hai" + file);
    validateFile(file, callback);
  }
}).single("myImage");

function validateFile(file, callback) {
  let extensions = ["jpg", "png", "gif", "jpeg"];
  let isAllowed = extensions.includes(
    file.originalname.split(".")[1].toLowerCase()
  );
  let isAllowedMimeType = file.mimetype.startsWith("image/");
  if (isAllowed && isAllowedMimeType) {
    return callback(null, true);
  } else {
    callback("Erorr: File Type not allowed");
  }
}

module.exports = upload;
