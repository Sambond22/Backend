const express=require("express");
const router=express.Router();

const {login,signup}=require("../Controllers/Auth");
const {auth,isAdmin,isStudent}= require("../middlewares/auth");
router.post("/login",login)
router.post("/signup",signup);



// protected route for student
// path, no. of middlewares ,action/handler/call back funtion

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for TESTS",
    })

});

router.get("/student",auth,isStudent,(req,res)=>{
        res.json({
            success:true,
            message:"welcome to the protected route for students",
        })

});

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for Admins",
    })

});

module.exports=router;