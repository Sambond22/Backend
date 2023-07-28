const blog=require("../model/blog");

exports.retrivepost=async (req,res)=>{
    try{
        const data=await blog.find({}).populate("comments").exec();

        res.status(200).json({
            data:data,
            success:true,
            mesg:"check all the post",
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            msg:err.msg,
       })
    }
}


exports.retrivepost_id=async (req,res)=>{
    
    try{
        const id=req.params.id;
        const data=await blog.findById({_id:id});
        res.status(200).json({
            data:data,
            success:true,
            mesg:"check all the post",
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:"Internal server error",
            msg:err.msg,
       })
    }
}
