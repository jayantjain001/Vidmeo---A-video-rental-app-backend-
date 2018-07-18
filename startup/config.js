const config =require('config');

module.exports =function(){

    if(!config.get('jwtPrivatekey'))
    {
 throw  new Error('FATAL ERROR:  jwtPrivatekey not defined');
     
    }


}