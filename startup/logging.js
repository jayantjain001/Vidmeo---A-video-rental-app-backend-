const winston=require('winston');  //logging errors
require('express-async-errors');
require('winston-mongodb');


module.exports=function(){
//Handling and Logging Errors
winston.handleExceptions(new winston.transports.File({filename:'uncaughtExceptions.log'}));
process.on('unhandledRejection',(ex)=>{
   throw ex;
    });

winston.add(winston.transports.File,{filename:'logfile.log'});
winston.add(winston.transports.MongoDB,{db:'mongodb://127.0.0.1/vidly',
level:'info'});

}