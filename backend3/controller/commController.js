const blog=require("../model/blog");
const Comment=require("../model/commentMd");


exports.CommentController=async(req,res) =>{
    try{
        const {post,user,body}=req.body;
        // another way to create a entry in db
        // with the use of save first you make a object 
        // so make object of comment
        const comment=new Comment({
           post,user,body, 
        });
        // save the new comment in db
        // here we use objectname.save();
        const savecomment=await comment.save();

        // post ke comment array me comment ki id dalo
        // find the post by id, add the new comment ito its comments array
        const updatedpost=await blog.findByIdAndUpdate(post, {$push:{comments:savecomment._id}},{new :true}  )
            .populate("comments")//populate the commetns array with comment documents
            .exec();

            res.status(200).json({
                post:updatedpost,
            });

    }
    catch(err){

        console.log(err);
        console.error(err);
        res.status(500).json({
            error:"error while creating comment",
        });
    }
};
