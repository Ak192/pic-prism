const mogodb = require('mongoose');
const connectDB = () => {
    mogodb.connect(process.env.MONGODB_URI).then(() => 
        console.log("database connected")).catch((err) => console.log(err));

}
module.exports={connectDB};