const express=require("express");
const app=express();

// app.listen(3000,()=>{
//     console.log("App is running successfully");
// });
require("dotenv").config();
const PORT=process.env.PORT|| 4000;

// in controller you fetch data from parser so provide it..

// middleware to parse json request body
app.use(express.json());

// import routes for todo api
const todoRoutes=require("./routes/todo");
// mount api (add some name/variable in your api)
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT,()=>{
    console.log(`server started successullly at ${PORT}`)
})

// connect to db
const dbconnect=require("./config/database");
dbconnect();

// default route
// app.get("/",(req,res)=>{
//     res.send("This is home page");
// })
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE </h1>`);
})