const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/Everynote";
const connectToMongo = () => {
  mongoose
    .connect(
      "mongodb+srv://lokeshkatari:21341A0571@cluster0.n20h5cc.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("success");
    });
};
module.exports = connectToMongo;
