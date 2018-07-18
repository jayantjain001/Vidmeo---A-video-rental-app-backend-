const jwt=require('jsonwebtoken');
const config =require('config');
//Authentication  matching password username
//Authorisation checking if the user is the person he is declaiming
module.exports=function (req,res,next){
const token =req.header('x-auth-token');
if(!token)   // user not authorised
{return res.status(401).send('Access denied. No token provided');
}   

try{
const decoded=jwt.verify(token,config.get('jwtPrivatekey'));
req.user=decoded;
next();
}catch(ex){
    res.status(400).send('Invalid token.');  //Bad request
}


}