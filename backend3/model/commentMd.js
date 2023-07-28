const mongoose=require("mongoose");

const commentMd=new mongoose.Schema({

    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
    
});
module.exports=mongoose.model("comment",commentMd);