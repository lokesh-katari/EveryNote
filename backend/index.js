const express = require('express');
const app = express();
const connectToMongo =require("./DB");
const PORT = 5000;
const cors =require('cors');
app.use(cors());
app.use(express.json());


//connecting to database
connectToMongo();
    
//for routing to specified path

app.use('/api/auth',require("./Routers/auth"));
app.use('/api/note',require("./Routers/note"));



// app listening at port 
app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});  
