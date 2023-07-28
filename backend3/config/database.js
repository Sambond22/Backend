const mongoose=require("mongoose");

require("dotenv").config();

const dbconnect=()=>{mongoose.connect(process.env.Database_url, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{console.log("successfully connected with database")})
.catch((error)=>{
    console.log(error);
    console.log("Issue in db connection")
    process.exit(1);
});}

module.exports=dbconnect;