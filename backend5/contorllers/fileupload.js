const filemd=require("../model/Filemd");

exports.localfileUpload=async (req,res)=>{
    try{
        // fetch file from your req body
        const file=req.files.file;
        console.log("file dekho bhai ",file);
        
        // app apne server pe kis path pe file ko store krna chate he
        let path=__dirname+"/files/"+Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path",path);
        // apni file ko es path pr move krdo
        file.mv(path, (err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:`local file upload succesfully on this path ${path}`,
        })

    }
    catch(error){
        console.log("not able to upload the file on server")
        console.log(error);

    }
}