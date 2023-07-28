const express=require("express");
const router=express.Router();

const {createpost}=require("../controller/Createpost");
const {retrivepost,retrivepost_id}=require("../controller/retrivepost");
const {CommentController}=require("../controller/commController");
const {likeController,dislikeControleer}=require("../controller/likeController");
router.post("/createblogs/",createpost);
router.get("/retriveblogs/",retrivepost);
router.get("/retriveblog/:id",retrivepost_id);
router.post("/comments/create/",CommentController);
router.post("/likes/like/",likeController);
router.post("/likes/dislike/",dislikeControleer);
module.exports=router;