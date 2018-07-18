// Adding Modules
const express =require('express');
const app = express();   //creating instance of express 
const winston=require('winston');  // handling errors
// SINGLE RESPONSIBILITY PRINCIPLE    learnt 
//process is an event emitter

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);
//views
app.set('view engine','pug');
app.set('views','./views');

const port =process.env.PORT || 3000;
app.listen(port,()=> winston.info("Listening on PORT : "+ port));