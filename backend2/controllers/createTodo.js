// import model
const Todo =require("../models/Todo");

// difine route handler
exports.createTodo=async(req,res)=>{
    try{
        // extract data from parser
        const {title,discription}=req.body;
        // create a object and insert in db
        const response =await Todo.create({title,discription});
        // above create word is use to insert a object in db

        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}