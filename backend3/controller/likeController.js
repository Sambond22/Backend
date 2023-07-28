const blog=require("../model/blog");
const Like=require("../model/likeMd");

exports.likeController=async (req,res)=>{
    try{
        const {post,user}=req.body;
        const likeobj=new Like({
            post,user,
    });
        const likecreate=await likeobj.save();

        // ab post ke like me enter krenge
        const updatedpost=await blog.findByIdAndUpdate(post,{$push:{likes:likecreate._id}},{new:true})
        .populate("likes").exec();

        res.status(200).json({
            post:updatedpost,
        });

    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            error:"error while liking post",
        });
    }
};

exports.dislikeControleer=async (req,res)=>{
    try{
        const {post,like}=req.body;
        // find and delete like collection me se
        const deletlike=await Like.findOneAndDelete({post:post, _id:like});
// updat post cllection
const updatedpost=await blog.findByIdAndUpdate(post,{$pull:{likes:deletlike._id}} ,{new:true});
        res.status(200).json({
            post:updatedpost,
        });
        
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            error:"error while unlike post",
        });
    }
}
