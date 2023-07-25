const mongoose=require("mongoose");

// make function when every time any one call then it make link btw server and db

// first instaill dotenv file then you can use 
// in terminal npm i dotenv

require("dotenv").config();
// with the use of above line {jo bhi env file me define kiya hoga sara data load hojayega process object me}
const dbConnect=()=>{
    mongoose.connect(process.env.Database_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("connection successfull"))
    .catch((error)=>{
        console.log("Issue in db connection");
    console.error(error.message);
    process.exit(1);
});
}
module.exports=dbConnect;

