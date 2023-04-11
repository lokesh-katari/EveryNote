const mongoose =require("mongoose");
const mongoURI ='mongodb://127.0.0.1:27017/Everynote';
const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("success");
    })
    
}
module.exports=connectToMongo;