const Joi =require('joi');
const mongoose =require('mongoose');
//defining Schema for customers
const customerSchema = new mongoose.Schema({
    name:{ type:String,
        required:true,
        minlength:3,
        maxlength:15
    },
    phone:{
        type:String,
        required:true,
        length:13,
        
    }
    });
    
    const Cust = mongoose.model('Cust',customerSchema,'customers');
    
 //Function 
 function validateCustomer(customer)
 {
     const schema ={
         name:Joi.string().min(3).required(),
         phone:Joi.string().length(13).required()
     };
     return Joi.validate(customer,schema);
 }    
// exports => module.exports
 exports.Cust=Cust;
 exports.validate=validateCustomer;