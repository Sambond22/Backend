const express=require("express");
const app=express();

app.use(express.json());
const blogg=require("./routes/blogg");
app.use("/post/v1",blogg);

require("dotenv").config();
const PORT=process.env.PORT||4000;

app.listen(PORT,(()=>{
    console.log("successfully  server created");
}))

const db=require("./config/database");
db();
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE of blogs </h1>`);
})