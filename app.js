const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Welcome to the homepage!");
});
app.listen(3000,()=>{
    console.log("wassup");
});
