
const User = require('../Models/User');
const dotenv= require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { generateacessToken } = require('../helpers/AcessToken');
const { generaterefreshToken } = require('../helpers/RefreshToken');
const signup = async (req, res) => {
    const { username, email, password, accountType } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(404).json({ success: false, message: 'Already Exist user please Try again' })
        }
        const securePassword = await bcrypt.hash(password, 10);
        user = new User({
            username,
            email,
            password: securePassword,
            accountType

        });
        await user.save();
        res.status(201).json({ success: true, message: "you have Successfully Registrated Now !" });




    }
    catch (err) {
        res.status(500).send({ success: false, message: "something is wrong please try again !" })
    }

};
const login = async (req, res) => {
    const { email, password } = req.body;
 
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid User please try again !" })
        }
        const comparePassword = await bcrypt.compare(password,user.password);
        if (!comparePassword) {
            return res.status(404).json({ success: false, message: "Invalid Credential " });
        }
        const data = {
            id: user._id,
            accountType: user.accountType,
            athorName: user.username
        }
        const AcessToken = await jwt.sign(data,process.env.ACESS_TOKEN_SECRET,{expiresIn:"15m"});
        const RefreshToken = await jwt.sign(data,process.env.REFRESH_TOKEN_SECRET,{expiresIn:"1d"});
       

        return res.status(201).json({
            success: true,
            message: "Login Successfully ",
            AcessToken,
            RefreshToken,
            role: user.accountType,
            author: user.username
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message })
    }
};

module.exports = { signup, login };
