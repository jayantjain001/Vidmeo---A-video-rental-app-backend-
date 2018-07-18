const express=require('express');
const router =express.Router();
const mongoose =require('mongoose');
const {validate ,Genre} =require('../models/genre');
const _=require('lodash');
const auth=require('../middleware/auth');
const admin=require('../middleware/admin');


// get
router.get('/', async(req,res)=>{
        const genres =await Genre.find();
        return res.send(genres);
  
   // res.render('index',{title:'Vidly App Genres  :',message:genres}); 
    
});

    router.get('/:id',async (req,res)=>{
        const file=await Genre.findById(req.params.id);
        if(!file)return res.status(404).send('File not Found with given id');
        //res.send(genre);
    return res.send(file);    
    });
        
    
    
    // post
    router.post('/',auth,async (req,res)=>{
    const {error} =validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const gen =new Genre({
    name:req.body.name
    });
    const result =await gen.save();
res.send(result);    
});
    
    // put
    router.put('/:id',[auth,admin],async (req,res)=>{
        const {error} =validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        const gen=await Genre.findByIdAndUpdate(req.params.id,{name: req.body.name},{ new:true});
        if(!gen)
        return res.status(404).send('File not Found with given id');
    
    return res.send(gen);
    });
    
    //delete
    router.delete('/:id',[auth,admin],async (req,res)=>{
        const file =await Genre.findByIdAndRemove(req.params.id);
        if(!file)
        return res.status(404).send('File not Found with given id');
    
    return res.send(file);
    });
    
    module.exports= router;