const user=require("../Model/Usermd");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


require("dotenv").config();
// sign
exports.signup=async (req,res)=>{
    try{
          // fetch data
    const {name,email,password,role}=req.body;

    // check if email (user )already resgistered or signup
    const emailprsnt=await user.findOne({email});

    if(emailprsnt){
        return res.status(400).json({
            success:false,
            message:"user already exist",
        });
    }

    // encryption of password
    let hashpassword;
    try{
        hashpassword=await bcrypt.hash(password,10);

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Problem in hashing or encryption of your password", 
        });
    }

    // Create entry in db
    const userr=await user.create({name,email,password:hashpassword,role})

    return res.status(200).json({
        success:true,
        data:userr,
        message:"user account created successfully",
    });


    }
    catch(error){
        console.log(error);
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"user cannot be registered some thing wrong",
        });
    }
  
}

// login
exports.login=async (req,res)=>{
try{
    //    data fetch
    const {email,password}=req.body;
    
    // email ya password me data present nhi he to
    if(!email||!password){
        return res.status(400).json({
            success:false,
            message:"Plz fill all information",
        });
    }

    // check email is already register or not
   let userdetail=await user.findOne({email});
    // if email is not preseent in our db so
    if(!userdetail){
        return res.status(401).json({
            success:false,
            message:"User is not registered",
        });
    }

    let payload={
        email:userdetail.email,
        id:userdetail._id,
        role:userdetail.role,
    };

    // verify password and genrate jwt token
    
    if(await bcrypt.compare(password,userdetail.password)){
            // password match 
            // token create

            let token=jwt.sign(payload,process.env.JWT_SECRET,
                                                        {
                                                            expiresIn:"2h",
                                                        });

          
            userdetail.token=token;
            // remove password from userdetail object not from db
            userdetail.password=undefined;
            
            //   create cookies 
            // in cookie(pass name , data/value , option;)
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
              res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                userdetail
                ,message:"user loggen in succesfully",
              });
          



    }
    else{
        // password not match
        return res.status(403).json({
            success:false,
            message:"Password Incorrect",
        });

    }


}
catch(error){
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"login failure",
    });
}
}