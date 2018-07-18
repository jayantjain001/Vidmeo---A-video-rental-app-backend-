const Joi =require('joi');
const mongoose =require('mongoose');


//defining Schema for Genres
const genreSchema = new mongoose.Schema({
    name:{ type:String,
        required:true,
        minlength:4,
        maxlength:12
    }
    });
    
    const Genre = mongoose.model('Genre',genreSchema);
    

    //Function 
    function validateGenre(genre)
    {
        const schema ={
            name:Joi.string().min(4).required()
        };
        return Joi.validate(genre,schema);
    }
exports.genreSchema=genreSchema;
    exports.validate=validateGenre;
    exports.Genre=Genre;
    