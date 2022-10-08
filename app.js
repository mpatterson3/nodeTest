
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const indexRouter = require("./routes/home");
mongoose.connect('mongodb://localhost/loudworm');
var db = mongoose.connection;
db.on('connection',()=>{
    console.log('connected to db');
});
const subscriberSchema = {
    fname:String,
    lname:String,
    phone:String,
    email:String
};
mongoose.model('subscriber',subscriberSchema);
//app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use("indexRouter",indexRouter);

const port = process.env.PORT || 3000;

// app.get("/",(req,res)=>{
//     res.send("index.html");
// });

app.listen(port,()=>{
    console.log("wassup on port ",port);
});


  
