const mongoose=require("mongoose");
// const { Schema } = require("mongoose");

const bolgschema=new mongoose.Schema(

  { 
     heading:{
    type:String,
    maxLength:50,
    require:true,
    },
    content:{
        type:String,
        required:true,
        maxLength:250,
    },
   
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
    }] ,
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),

    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },


}

);

module.exports=mongoose.model("blog",bolgschema);