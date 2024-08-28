const mongoose= require('mongoose');
const userSchema= new mongoose.Schema({
    username:{
    type:String,
    unique:true,
     required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    accountType:{
        type:String,
        required:true
     
    },
    uploads:[{       
         type:mongoose.Schema.Types.ObjectId,
         ref:"Post"
        },
    ],
    purchased:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ],
    favourates:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    ]

    
},{timestamps:true});

const User= mongoose.model("User",userSchema);
module.exports=User;