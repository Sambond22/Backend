const mongoose=require("mongoose");

require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.MONGODB_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("db successfully connected")
    }).catch((error)=>{
        console.log("db not connected");
        console.error(error);
        process.exit(1);
    });
}

module.exports=dbconnect;