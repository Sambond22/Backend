const express=require('express');
const app=express();

// simple use body parser
// which take data from body
// used to parse req.body in express in case of put or post;
const bodyParser=require('body-parser');
// bodyparser object se apne server ko power up krna chata hu
// apne server app ko boldiya body parser use krlena in json 

app.use(bodyParser.json());
// specifically parse json data & add it to the request .Body object

// server create
app.listen(3000,()=>{
    console.log("You create a server with a port no. 3000")
});



// Routes
app.get('/',(req,res)=>{
    res.send("Hello you request confirm")
});
app.post('/api/cars',(req,res)=>{
    const {name,brand,price}=req.body;
    console.log(name);
    console.log(brand);
    console.log(price);
    res.send("Car submitted succesfully");
})

// link server and database 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an error")} );