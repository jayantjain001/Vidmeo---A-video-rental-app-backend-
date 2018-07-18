module.exports=function(handlerFunc)
{return async (req,res,next) =>{

    try{
        await handlerFunc(req,res);
        }catch(e){
            next(e);
        }
    };
}