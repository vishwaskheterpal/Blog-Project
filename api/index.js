const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const web = express();

const mongoose = require("mongoose");
const authRoute = require("./routes/auth")



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

web.use("/api/auth",authRoute);
web.use(express.json());

web.listen(5000,()=>{
    console.log("Listening on port 5000");
})