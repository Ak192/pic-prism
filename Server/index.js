
const express = require('express')
const cors= require('cors');
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();


const {readdirSync}=require('fs')

const {connectDB}= require('./dbconfig');
const { route } = require('./Routers/AuthRoutes');


connectDB();
const port=process.env.PORT;
//dynamic routers for routing all the routers
readdirSync('./Routers').map((route)=>
  app.use('/api',require(`./Routers/${route}`))
);
// console.log(readdirSync('./Routers'));
app.listen(port,()=>{
  console.log(`server start port :${port}`);
});
