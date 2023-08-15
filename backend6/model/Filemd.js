const mongoose=require("mongoose");
const nodemailer=require("nodemailer");
const fileschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
         },
         Url:{
            type:String,
        },
        tags:{
            type:String,
        },
        email:{
        type:String,
        },
    

});

// always write between schema and model creation
// post middleware are executed after the hooked method 
// post middleware after saving of entry call this function(mail send, or any other function)
// pre middleware before saving of entry call this function
// email so use nodemailer
// doc is simple entry content of your db
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: "Shivam Yadav 😎 <shivam@123>",
//     to: user.email,
//     subject: "Verify Your Email",
//     html: `<p>Please click <a href=" http://localhost:3000/api/verify?token=${verificationToken}">here</a> to verify your email address.</p>`,
//   };

//   await transporter.sendMail(mailOptions);
fileschema.post("save",async function(doc){
    try{
        console.log("doc",doc);
        // transporter
        let  transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user:process.env.MAIL_USER  ,
                pass:process.env.MAIL_PASS,
            },
          });
        // let transporter=nodemailer.createTransport({
        //     host:process.env.MAIL_HOST,
        //     auth:{
        //         user:process.env.MAIL_USER  ,
        //         pass:process.env.MAIL_PASS,
        //     }
        // })

        // send mail
  
let info =await transporter.sendMail({
    from:`Shyam bonde`,
    to:doc.email,
    subject:"new file uploaded on cloudinary",
    html:`<h2>Hello every one , file uploaded </h2><a href=${doc.Url}>${doc.Url}</a>`
    
})

console.log(info);

    }
    catch(err){
        console.log(err);
        console.log("unable to send email");
    }
})




module.exports=mongoose.model("filemd",fileschema);