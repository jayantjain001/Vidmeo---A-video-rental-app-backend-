const express=require('express');
const router =express.Router();
const mongoose =require('mongoose');
const {Cust,validate}=require('../models/customers');
const auth=require('../middleware/auth');


// get
router.get('/',async (req,res)=>{
    const cust =await Cust.find();
return res.send(cust);    
});

    router.get('/:id',async (req,res)=>{
        const file=await Cust.findById(req.params.id);
        if(!file)return res.status(404).send('File not Found with given id');
        //res.send(genre);
    return res.send(file);    
    });
        
    // post
    router.post('/',async (req,res)=>{
    const {error} =validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const gen =new Cust({
    name:req.body.name,
    phone:req.body.phone
    });
    const result =await gen.save();
res.send(result);    
});
    
    // put
    router.put('/:id',auth,async (req,res)=>{
        const {error} =validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const gen=await Cust.findByIdAndUpdate(req.params.id,{name: req.body.name,phone:req.body.phone},{ new:true});
        if(!gen)
        return res.status(404).send('File not Found with given id');
    
    return res.send(gen);
    });
    
     //delete
    router.delete('/:id',auth,async (req,res)=>{
        const file =await Cust.findByIdAndRemove(req.params.id);
        if(!file)
        return res.status(404).send('File not Found with given id');
    
    return res.send(file);
    });
    
   
    
    module.exports= router;