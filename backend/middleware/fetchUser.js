const jwt =require('jsonwebtoken');
const JWT_SECRET ='lokeshisagoodboy';
const fetchUser =(req,res,next)=>{
    //get the user from the authtoken provided from  the id
    const token =req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please authenticate with proper credentials"});

    }
    try{
        const data =jwt.verify(token,JWT_SECRET);
        console.log(`the dat in fetchuser is ${data}`);
        req.user=data.user;
        next();

    }catch(error){
        res.status(401).send({error:"please authenticate using a valid token"})
    }

}

module.exports =fetchUser;
