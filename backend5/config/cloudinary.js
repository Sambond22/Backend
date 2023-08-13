const cloudinary = require('cloudinary').v2;


exports.cloudinaryConnext=()=>{
    // cloud name , api key, apisecret
    
    try{
        cloudinary.config({
            cloud_name:process.env.cloud_name,
            api_secret:process.env.api_secret,
            api_key:process.env.api_key,
        })

    }catch(error){
        console.log(error);
    }
}