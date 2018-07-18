const winston =require('winston');
const mongoose =require('mongoose');

module.exports=function(){
// Database
mongoose.connect('mongodb://127.0.0.1/vidly')
.then(winston.info('MongoDB connected ...'))

}