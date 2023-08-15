
const express=require("express");
const route=express.Router();

const {localfileUpload}=require("../contorllers/fileupload");
const {imageupload,videoupload,imgsizereducer}=require("../contorllers/fileupload");
route.post("/localfileUpload",localfileUpload);

route.post("/imageupload",imageupload);
route.post("/videoupload",videoupload);
route.post("/imgsizereducer",imgsizereducer);

module.exports=route;