const nodemailer = require("nodemailer");

const mailer = function(address, userauth) {
  var transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codercommunityproject@gmail.com",
      pass: "lala@coder"
    }
  });

  var mailoptions = {
    from: "codercommunityproject@gmail.com",
    to: address,
    subject: "Coder's Community",
    text:
      "Hii Welcome to Coder's Community Your User Name is " +
      address +
      "and password is " +
      userauth +
      "."
  };

  transport.sendMail(mailoptions, function(error, info) {
    if (error) {
      console.log(error);
    }
  });
};

module.exports = mailer;
