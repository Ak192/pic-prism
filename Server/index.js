const express = require('express')
const app = express();
app.use(express.json());
app.get('/product',async(req,res)=>{
    try{
        res.status(201).send({message:'show all product'})
    }
    catch(err){
     res.status(404).send(err);
    }
} );
app.listen('5000',()=>{
  console.log("server start port :50000")
});
