const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const multer = require("multer");
const nodemailer = require("nodemailer");
const session = require("express-session");
const mongoose = require("mongoose");
const User = require("./modals/user");
const tag = require("./modals/tag");
const Community = require("./modals/community");
require("./modals/dbConnection");
app.use(
  session({
    secret: "xYzUCAchitkara",
    resave: false,
    saveUninitialized: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const add = require("./routes/get/add");
const addUser = require("./routes/post/addUser");
const adminChangePass = require("./routes/get/adminChangePass");
const adminCommunities = require("./routes/get/adminCommunities");
const adminCommunityProfile = require("./routes/get/adminCommunityProfile");
const adminEdit = require("./routes/get/adminEdit");
const adminPersonalProfile = require("./routes/get/adminPersonalProfile");
//const adminCommunityProfile1 = require("./routes/get/adminCommunityProfile1");
const adminProfile = require("./routes/get/adminProfile");
const adminSearch = require("./routes/get/adminSearch");
const adminSetting = require("./routes/get/adminSetting");
const adminUpdate = require("./routes/get/adminUpdate");
const changePass = require("./routes/get/changePass");
const changePass1 = require("./routes/post/changePass1");
const changePass2 = require("./routes/post/changePass2");
const communities = require("./routes/get/communities");
const createCommunities = require("./routes/get/createCommunities");
const createTag = require("./routes/post/createTag");
const createTag1 = require("./routes/get/createTag1");
const deactivate = require("./routes/get/deactivate");
const del = require("./routes/post/del");
const edit = require("./routes/get/edit");
const firstUser = require("./routes/get/firstUser");
const getAllCommunity = require("./routes/get/getAllCommunity");
const getCommunity = require("./routes/get/getCommunity");
const getCommunity1 = require("./routes/get/getCommunity1");
const getsearch = require("./routes/get/getsearch");
const getTagTable = require("./routes/get/getTagTable");
const getUserCommunity = require("./routes/get/getUserCommunity");
const getUserSearch = require("./routes/get/getUserSearch");
const login = require("./routes/post/login");
const mail = require("./routes/post/mail");
const pagination = require("./routes/post/pagination");
const pending = require("./routes/post/pending");
const photo = require("./routes/post/photo");
const profile = require("./routes/get/profile");
const restrict = require("./routes/post/restrict");
const rootDelete = require("./routes/post/rootDelete");
const rootPut = require("./routes/post/rootPut");
const simpleUserCommunities = require("./routes/get/simpleUserCommunities");
const simpleUserSearch = require("./routes/get/simpleUserSearch");
const tagDelete = require("./routes/post/tagDelete");
const tagList = require("./routes/get/tagList");
const update = require("./routes/get/update");
//const updateCommunity = require("./routes/get/updateCommunity");
const updateCommunity1 = require("./routes/post/updateCommunity1");
const updateUserList = require("./routes/post/updateUserList");
const uploadRoutes = require("./routes/post/uploadRoutes");
const userAskToJoin = require("./routes/post/userAskToJoin");
const userChangePass = require("./routes/get/userChangePass");
const userCommunities = require("./routes/get/userCommunities");
const userCommunityProfile = require("./routes/get/userCommunityProfile");
const userCreateCommunities = require("./routes/get/userCreateCommunities");
const userEdit = require("./routes/get/userEdit");
const userJoin = require("./routes/post/userJoin");
const userList = require("./routes/get/userList");
const userPersonalProfile = require("./routes/get/userPersonalProfile");
const userPersonalProfile1 = require("./routes/get/userPersonalProfile1");
const userProfile = require("./routes/get/userProfile");
const users = require("./routes/post/users");
const userSearch = require("./routes/get/userSearch");
const userSetting = require("./routes/get/userSetting");
const userupdate = require("./routes/get/userupdate");

//Use Routes
app.use(add);
app.use(addUser);
app.use(adminChangePass);
app.use(adminCommunities);
app.use(adminCommunityProfile);
app.use(adminEdit);
app.use(adminPersonalProfile);
//app.use(adminCommunityProfile1);
app.use(adminProfile);
app.use(adminSearch);
app.use(adminSetting);
app.use(adminUpdate);
app.use(changePass);
app.use(changePass1);
app.use(changePass2);
app.use(communities);
app.use(createCommunities);
app.use(createTag);
app.use(createTag1);
app.use(deactivate);
app.use(del);
app.use(edit);
app.use(firstUser);
app.use(getAllCommunity);
app.use(getCommunity);
app.use(getCommunity1);
app.use(getsearch);
app.use(getTagTable);
app.use(getUserCommunity);
app.use(getUserSearch);
app.use(login);
app.use(mail);
app.use(pagination);
app.use(pending);
app.use(photo);
app.use(profile);
app.use(restrict);
app.use(rootDelete);
app.use(rootPut);
app.use(simpleUserCommunities);
app.use(simpleUserSearch);
app.use(tagDelete);
app.use(tagList);
app.use(update);
//app.use(updateCommunity);
app.use(updateCommunity1);
app.use(updateUserList);
app.use(uploadRoutes);
app.use(userAskToJoin);
app.use(userChangePass);
app.use(userCommunities);
app.use(userCommunityProfile);
app.use(userCreateCommunities);
app.use(userEdit);
app.use(userJoin);
app.use(userList);
app.use(userPersonalProfile);
app.use(userPersonalProfile1);
app.use(userProfile);
app.use(users);
app.use(userSearch);
app.use(userSetting);
app.use(userupdate);

//app.post('/getpaginationtable',function(req,res){
//
//    User.countDocuments(function(error,count){
//        var start = parseInt(req.body.start);
//        var len  = parseInt(req.body.length);
//
//        User.find({
//
//        }).skip(start).limit(len)
//        .then(data=> {
//            res.send({"recordsTotal" : count, "recordsFiltered" : count,data})
//        })
//        .catch(err=> {
//            res.send(err)
//        })
//    })
//})

//  app.get('/hello',function(req,res){
//    res.send('hello');
//})

console.log("Running on port 3000");
app.listen(3000);
