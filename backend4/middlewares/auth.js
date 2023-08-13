// middleware kuch nhi ek function he invoke hota he mid me req to server
// for authentification and authorization
// authentification (token pass with request)
// authorization (Do u have permission to go with it(student role, admin role))

// auth,  isStudent, isAdmin
const jwt=require("jsonwebtoken");
require("dotenv").config();

// next  = may be you have more than one middleware after the commpletion of first then yoiu call to next middler ware (depend on writing order in route) 
// autheification
exports.auth=(req,res,next)=>{
    try{
        // extract jwt token
        // depent where yoiur token is presnet


        console.log("cookie" , req.cookies.token);
        console.log("body" , req.body.token);
        console.log("header", req.header("Authorization"));
       
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        
        if(!token || token === undefined) {
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }

        //verify the token

       try{
            
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.userdetail=decode;

        } catch(error) {
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }

        next();
    }
    catch(error) {
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
            error:error.message,
        });
    }
}

// authorization 
exports.isStudent=(req,res,next)=>{
    try{
        if(req.userdetail.role!="Student"){
            return res.status(401).json({
                success:false,
                message:"this is protected routes for student",
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:'User Role is not matching',
        })
    }
    }



exports.isAdmin=(req,res,next)=>{
    try{
        if(req.userdetail.role!="Admin"){
            return res.status(401).json({
                success:false,
                message:"this is protected routes for Admin",
            });
        }
        next();
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:'User Role is not matching',
        })
    }
    }