const { signup } = require('../Controllers/AuthControlllers');

const router= require('express').Router();


router.post('/login');
router.post('/signup',signup);
module.exports=router;