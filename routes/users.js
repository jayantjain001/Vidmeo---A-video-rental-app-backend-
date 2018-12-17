const {User, validate} = require('../models/users'); 
const mongoose = require('mongoose');
const express = require('express');
const _=require('lodash');
const bcrypt=require('bcrypt');
const router = express.Router();
const jwt=require('jsonwebtoken');
const config=require('config');
const auth=require('../middleware/auth');


router.get('/me',auth,async (req,res)=>{
    let user =await User.findById(req.user._id).select('-password');
    res.send(user);
});

router.post('/',async(req,res)=>{
    const {error} =validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    let user =await User.findOne({email:req.body.email});
    if(user) res.status(400).send('User Already Registered');
    
    user =new User(_.pick(req.body,['name','email','password']));
    const salt =await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(user.password,salt);

   await user.save();
   const token=   user.generateAuthToken();
    res.header('x-auth-token',token).send(_.pick(user,['_id','name','email']));  
// x-auth-token   is any arbitrary name
});
module.exports=router;