const express = require('express');
const { validationResult,body } = require('express-validator');
const router = express.Router();
const jwt= require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const JWT_SECRET ='lokeshisagoodboy';

const User=require("../Models/User");
const fetchUser = require('../middleware/fetchUser');

// Define authentication routes
// router.get('/', (req, res) => {

//   res.send('Authentication route');
// });

router.post('/createUser',[
  body('name','enter a valid name').isLength({min:5}),
  body('email','enter a valid email').isEmail(),
  body('password','password must be 5 characters').isLength({min:5}),
],async(req,res)=>{ 

  const errors =validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
  try{
    let user= await User.findOne({email:req.body.email});
    if(user){
      res.status(400).send({error:'sorry user already exists'});
      
    }
    const salt =await bcrypt.genSalt(9);
    const securedPass =await bcrypt.hash(req.body.password,salt);

    user =await User.create({
      name:req.body.name,
      password:securedPass,
      email:req.body.email,
    });
    const data ={
      user:{
        id:user.id
      }
    }
    const authtoken =jwt.sign(data,JWT_SECRET);
    res.json({authtoken})
  }catch(error){
    console.log(error.message);
    res.status(500).send("internal server error");

  }

})


router.post('/login',[
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
],async (req,res)=>{
  let success =false;

  const errors =validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
  const {email,password}=req.body;

  try {
    let user =await User.findOne({email});
    if(!user){
      success =false
      return res.status(400).json({ error: "Please try to login with correct credentials" });      }
    
      const comparePass = await bcrypt.compare(password,user.password);
      if (!comparePass) {
        success = false
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
      }
  
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken })
    } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
})

router.get('/getUser',fetchUser,async (req,res)=>{
        try {
          userId =req.user.id;
          const user =await User.findById(userId).select("-password");//here -password represents except password all data is stored
          res.send(user);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
})

module.exports = router;
