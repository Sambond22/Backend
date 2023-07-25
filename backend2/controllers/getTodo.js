// import model
const Todo =require("../models/Todo");

// difine route handler
exports.getTodo=async(req,res)=>{
    try{
        
        const todo=await Todo.find({});
        res.status(200).json({
            success:true,
            data:todo,
            message:"Entry Created Successfully",
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


exports.getTodoid=async (req,res)=>{
        try
        {
            // extract todo items basis on id
            // first way to get id second way in update.js
            const id=req.params.id;
            const data=await Todo.findById({_id:id});
            if(!data){
                // if(id not found)
                return res.status(404).json({
                    success:false,
                    Message:"NO data found",
                })
            }
            res.status(200).json({
                success:true,
                data:data,
                message:`Todo ${id} data successfully fetched`,
            })
        }
        catch(err)
        {
            console.error(err);
            console.log(err);
            res.status(500).json({
                success:false,
                data:"internal server error",
                message:err.message,
            })

        }
}