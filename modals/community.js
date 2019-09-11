const mongoose = require("mongoose");

var communityschema = new mongoose.Schema({
  communityname: String,
  rule: String,
  location: String,
  owner: String,
  createdate: String,
  pic: String,
  desc: String,
  id: String,
  commstatus: String,
  member: Array,
  join: Array,
  asktojoin: Array
});

const Community = mongoose.model("community", communityschema);

module.exports = Community;

//   const p = new User({name:"Shivam",emailid:"shivamgarg260@gmail.com",password:"123",city:"Mandi Dabwali",dob:"15/09/1999",gender:"male",role:"superadmin",status:"confirmed",restrict:1,first:false});
//   p.save((err,user)=>{
//       if(err){
//          return  console.log(err);
//       }
//       console.log(user);
//   })
