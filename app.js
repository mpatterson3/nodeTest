require('dotenv').config();
const express = require("express");
//const mongodb  = require("mongodb");
const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
//const database = 'loudworm';
app.get("/",(req,res)=>{
    res.send("index.html");
});
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error)=>console.error(error));
db.once('open', ()=>console.log("db open!"));
app.listen(port,()=>{
    console.log("wassup on port ",port);
});


  
