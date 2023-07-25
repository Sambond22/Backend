const express=require("express");
const router= express.Router();

// import controller
const {createTodo}=require("../controllers/createTodo");
const {getTodo,getTodoid}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/updateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");
// define Api router
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.delete("/deleteTodo",deleteTodo);
// :used befor id then it will add in your url
router.get("/getTodo/:id",getTodoid);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports=router;