const jwt=require('jsonwebtoken');
const dotenv= require('dotenv').config();

const varification= async(req,res,next)=>{
    const AuthHeader= req.header('authorization');
    const Token = AuthHeader && AuthHeader.split(" ")[1];
    if(!Token)return  res.status(404).json({success:false, message:"Anauthorize"});
    try{
      
        jwt.verify(Token,process.env.ACESS_TOKEN_SECRET,(err,user)=>{
            if(err) return res.status(404).json({success:false,message:"forbidden"});
            req.id=user.id;
            req.accountType=user.accountType;
            req.author=user.autho;
            next();

        })
    }
    catch(err){
     
        res.status(505).json({success:false, message:"Internal Server Error"});

    }
 

}

module.exports= {varification}