const Todo=require("../models/Todo");

exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,discription}=req.body;
        const data=await Todo.findByIdAndUpdate(
            {_id:id},
            {title,discription,updatedAt:Date.now()},
        )
        res.status(200).json({
            success:true,
            data:data,
            message:"updated successfully",
        })


    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })
    }
}