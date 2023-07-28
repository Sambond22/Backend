const mongoose=require("mongoose");

const likeMd=new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
})
module.exports=mongoose.model("like",likeMd);