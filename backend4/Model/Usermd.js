const mongoose=require("mongoose");

const Usermd=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
    },
    password:{
        type:String,
        require:true,
       
    },
    role:{
        type:String,
        enum:["Admin","Student","Visitor"]
    },



})
module.exports=mongoose.model("user",Usermd);