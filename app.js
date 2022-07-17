
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/loudworm');
var db = mongoose.connection;
db.on('connection',()=>{
    console.log('connected to db')
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

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("index.html");
});
app.post('/',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
    mongoose.model('subscriber').create(
        {
            fname:req.body.fname,
            lname:req.body.lname,
            phone:req.body.phone,
            email:req.body.email
        },
        function(err){
            if(!err){
                return;
            }
            res.send("you fucked up Mel");
        }
    );
});
app.listen(port,()=>{
    console.log("wassup on port ",port);
});


  
