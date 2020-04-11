const express = require('express');
const {signup,getuser} = require('../constoller/users');
const {apiKeyValidator}= require('../constoller/auth');
const router = express.Router();

router.post('/signup',signup);
router.post('/getuser',getuser);
router.post('/get',apiKeyValidator, getuser);

module.exports = router;

