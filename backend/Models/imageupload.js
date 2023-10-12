const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,  
});

const Image =mongoose.model('image',imageSchema)
module.exports =Image;