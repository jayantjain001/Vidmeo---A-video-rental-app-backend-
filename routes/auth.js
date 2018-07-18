const {User} = require('../models/users'); 
const mongoose = require('mongoose');
const express = require('express');
const _=require('lodash');
const bcrypt=require('bcrypt');
const router = express.Router();
const Joi =require('joi');
const jwt=require('jsonwebtoken');
const config=require('config');
router.post('/',async(req,res)=>{
    const {error} =validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let user =await User.findOne({email:req.body.email});
    if(!user) res.status(400).send('Invalid Email or Password');
    
    const validP=await bcrypt.compare(req.body.password,user.password);
    if(!validP)return res.status(400).send('Invalid Email or Password');
    const token=user.generateAuthToken();
   
 return res.send(token);
});


 //Function 
 function validate(req)
 {
     const schema ={
        
         email:Joi.string().min(5).max(255).required().email(),
         password:Joi.string().min(5).max(255).required()
     };
     return Joi.validate(req,schema);
 }
module.exports=router;