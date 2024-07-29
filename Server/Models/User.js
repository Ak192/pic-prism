const mongoose= require('mongoose');
const userSchema= new mongoose.Schema({
    username:{
    type:String,
    unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        unique:true
    },
    accountType:{
        type:String,
        default:"buyer"
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

    
});

const User= mongoose.model("User",userSchema);
module.exports=User;