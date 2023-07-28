const blog=require("../model/blog");

exports.createpost=async (req,res)=>{
    try{
       const  {heading,  content}=req.body;
       const data=await blog.create({heading,  content});

       res.status(200).json({
            success:true,
            msg:"your post is created",
            data:data,
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