const mongoose=require('mongoose');
const {Scheme}=mongoose;

const NoteSchema =new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"general"
    },
    date:{
        type:Date,
        dafault:Date.now
    },
});
const Note =mongoose.model('note',NoteSchema)
module.exports =Note;