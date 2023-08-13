const express=require("express");
const route=express.Router();

const {localfileUpload}=require("../contorllers/fileupload");

route.post("/localfileUpload",localfileUpload);

module.exports=route;