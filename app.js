const express = require("express");
const app = express();
const port = process.env.port || 3000;
app.get("/",(req,res)=>{
    res.send("Welcome to the homepage!");
});
app.listen(port,()=>{
    console.log("wassup on port ",port);
});
