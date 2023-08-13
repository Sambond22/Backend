const express=require("express");
const app=express();

require('dotenv').config();
const PORT=process.env.port||3000;



// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

// route import and mount
const routers=require("./Routes/user");
app.use("/api/v1",routers);

// call dbconnection
const dbconnect=require("./config/database");

dbconnect();


// activate
app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`)
})






