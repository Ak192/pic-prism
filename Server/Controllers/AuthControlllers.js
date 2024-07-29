
const User= require('../Models/User');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signup= async(req,res)=>{
    const {username,email,password,accountType}=req.body;
    try{
        let  user= await User.findOne({username});
        if(user){
             return res.status(404).json({success:false,message:'Already Exist user please Try again'})
        }
     const securePassword = await bcrypt.hash(password,10);
     user = new User({
        username,
        email,
        password:securePassword,
        accountType

     });
     await user.save();
     res.status(201).json({success:true,message:"you have Successfully Registrated Now !"});



        
    }
    catch(err){
        res.status(500).send({success:false,message:"something is wrong please try again !"})
    }

};
const login=async(req,res)=>{

};

module.exports={signup,login};
