const Todo=require("../models/Todo");

exports.deleteTodo=async (req,res)=>{
    try{
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
        message:"Todo delete" 
           })
    }
    catch(err){
console.log(err);
console.error(err);
res.status(500).json({
    success:false,
    error:err.message,
    message:"internal server error",
})
    }
}