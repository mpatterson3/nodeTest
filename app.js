
const express = require("express");

const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send("index.html");
});

app.listen(port,()=>{
    console.log("wassup on port ",port);
});


  
