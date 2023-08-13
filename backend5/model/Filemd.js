const mongoose=require("mongoose");
const fileschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
         },
         imgUrl:{
            type:String,
        },
        tags:{
            type:String,
        },
        email:{
        type:String,
        },
    

});
module.exports=mongoose.model("filemd",fileschema);