const express=require("express");
const app=express();

require("dotenv").config();
// add 2 middleware
// i
const port=process.env.PORT||4000;
app.use(express.json());
// ii
const fileupload=require("express-fileupload");
app.use(fileupload());

// db se connect krna he
const dbconnect=require("./config/database");
dbconnect();

// cloud se connect
const cloudconnect=require("./config/cloudinary");
cloudconnect.cloudinaryConnext();

// routes and api mount
const upload=require("./routes/Fileup");
app.use('/api/v1/upload',upload);

// active server
app.listen(port,()=>{
    console.log(`application created at ${port}`);
})
