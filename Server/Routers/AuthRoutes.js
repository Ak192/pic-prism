const { signup, login } = require('../Controllers/AuthControlllers');

const router= require('express').Router();


router.post('/login',login);
router.post('/signup',signup);
module.exports=router;