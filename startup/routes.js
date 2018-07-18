const express=require('express');
const genre =require('../routes/genre');
const home =require('../routes/home');
const movies =require('../routes/movies');
const customers =require ('../routes/customers');
const rentals =require('../routes/rentals');
const users =require('../routes/users');
const auth=require('../routes/auth')
const error=require('../middleware/error');



module.exports =function(app){
    app.use(express.json());   // include a  json method
    app.use(express.urlencoded({extended:true})); // can take more complex data
    app.use('/',home);
    app.use('/api/genre',genre);
    app.use('/api/customers',customers);
    app.use('/api/movies',movies);
    app.use('/api/rentals',rentals);
    app.use('/api/users',users);
    app.use('/api/auth',auth);
    app.use(error);
    


}