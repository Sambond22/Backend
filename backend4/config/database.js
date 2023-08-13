const mongoose=require("mongoose");

require("dotenv").config();
dbconnect=()=>{
    mongoose.connect(process.env.connectlink,
        {
           useNewUrlParser:true,
           useUnifiedTopology:true  
        }).then(()=>{console.log("successfully database connected ")})
        .catch((error)=>{console.log(error)
            console.error(error)
        console.log("db connection issue")
        process.exit(1);
    })
}
module.exports=dbconnect;