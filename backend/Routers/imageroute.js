const express = require('express');
const router = express.Router();
const multer = require('multer');
const Image = require("../Models/imageupload");
//for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('image'), async (req, res) => {
  const { originalname, buffer, mimetype } = req.file;

  const image = new Image({
    name: originalname,
    data: buffer,
    contentType: mimetype,
  });

  await image.save();

  res.json({ success: true, message: 'Image uploaded successfully' });
});

module.exports = router;