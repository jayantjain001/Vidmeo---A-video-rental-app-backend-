const express =require('express');
const router =express.Router();
const genre =[
    {id:1,name: 'horror'},
    {id:2,name: 'action'},
    {id:3,name: 'romance'},
    {id:4,name: 'comedy'},
    {id:5,name: 'fiction'},
    {id:6,name: 'drama'}
  ];
// home  

router.get('/',(req,res)=>{
    
     res.render('index',{title:'Vidly App',message:'Welcome to Vidly '});  // filename = index
    
    });


    module.exports=router;

