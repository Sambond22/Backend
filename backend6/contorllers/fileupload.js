
const filemd=require("../model/Filemd");
const cloudinary=require("cloudinary").v2;
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



////////// function for upload any type of file (audio , vedio , img , pdf) to cloudinary folder(sambond)/////////////

async function uploadfiletocloudinary(file,folder,quality){
    const options={folder};
    if(quality>0){
        options.quality=quality;
    }
   options.resource_type='auto';
    return await cloudinary.uploader.upload(file.tempFilePath,options);
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function isfiletypesupported(type,supportedtypes){
    return supportedtypes.includes(type);
}

// image upload
exports.imageupload=async (req,res)=>{
    try{
        // data fetch
        const {name,email,tags}=req.body;
        console.log(name,email,tags);

        const file=req.files.imgfile;
        console.log(file);

        // validataion
        const supportedtypes= ["jpg", "jpeg","png"];

        const filetype=file.name.split('.')[1].toLowerCase();
        // console.log('sojo');

        console.log("filetype",filetype);

        if(!isfiletypesupported(filetype,supportedtypes)){
            return res.status(400).json({
                success:false,
                message:"file format not supported",
            })
        }

        // folder cloudinary server ke folder ka name
        const response=await uploadfiletocloudinary(file,"sambond");
        console.log(response);
        // db me entry
        const filedata=await filemd.create({name,tags,email,Url:response.secure_url,});

        res.json({
            success:true,
            imggurl:response.secure_url,
            message:"img successfully uploaded",
        });

    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"not able to upload image",
        })

    }
}


// video upload
exports.videoupload=async (req,res)=>{
    try{
        // data fetch
        const {name,email,tags}=req.body;
        console.log(name,email,tags);

        const file=req.files.videofile;
        console.log(file);


        // validataion
        const supportedtypes= ["mp4","mkv","mov"];

        const filetype=file.name.split('.')[1].toLowerCase();
        // console.log('sojo');

        console.log("filetype",filetype);

        if(!isfiletypesupported(filetype,supportedtypes)){
            return res.status(400).json({
                success:false,
                message:"file format not supported",
            })
        }

        // folder cloudinary server ke folder ka name
        const response=await uploadfiletocloudinary(file,"sambond");
        console.log(response);
        // db me entry
        const filedata=await filemd.create({name,tags,email,Url:response.secure_url,});

        res.json({
            success:true,
            data:filedata,
            videourl:response.secure_url,
            message:"video successfully uploaded",
        });

        

    }catch(err){
        res.status(400).json({
            success:false,
            message:"not able to upload video"
        })
    }
}


// image size reducer

// image upload
exports.imgsizereducer=async (req,res)=>{
    try{
        // data fetch
        const {name,email,tags}=req.body;
        console.log(name,email,tags);

        const file=req.files.imgfile;
        console.log(file);

        // validataion
        const supportedtypes= ["jpg", "jpeg","png"];

        const filetype=file.name.split('.')[1].toLowerCase();
        // console.log('sojo');

        console.log("filetype",filetype);

        if(!isfiletypesupported(filetype,supportedtypes)){
            return res.status(400).json({
                success:false,
                message:"file format not supported",
            })
        }

        // folder cloudinary server ke folder ka name
        // 30 is quality value
        const response=await uploadfiletocloudinary(file,"sambond", 30);
        console.log(response);

        // db me entry
        const filedata=await filemd.create({name,tags,email,Url:response.secure_url,});

        res.json({
            success:true,
            imggurl:response.secure_url,
            data:filedata,
            message:"img successfully uploaded",
        });

    }
    catch(err){
        res.status(400).json({
            success:false,
            message:"not able to upload image",
        })

    }
}
