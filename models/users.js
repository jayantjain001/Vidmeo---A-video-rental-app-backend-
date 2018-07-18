const Joi =require('joi');
const mongoose =require('mongoose');
const jwt=require('jsonwebtoken');
const config=require('config');

//defining Schema for Genres
const userSchema = new mongoose.Schema({
    name:{ type:String,
        required:true,
        minlength:4,
        maxlength:12
    },
    email:{type:String,
        unique:true,
        required:true,
        minlength:5,
        maxlength:255
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
    },
    isAdmin:Boolean
    });
    userSchema.methods.generateAuthToken= function(){
        const token=   jwt.sign({_id:this._id,isAdmin:this.isAdmin},config.get('jwtPrivatekey'));
        return token;
    }
    const User = mongoose.model('User',userSchema);
    

    //Function 
    function validateUser(user)
    {
        const schema ={
            name:Joi.string().min(4).max(50).required(),
            email:Joi.string().min(5).max(255).required().email(),
            password:Joi.string().min(5).max(255).required()
        };
        return Joi.validate(user,schema);
    }

    
exports.userSchema=userSchema;
    exports.validate=validateUser;
    exports.User=User;
    