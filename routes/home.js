var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
router.get("/",(req,res)=>{
    res.send("./index.html");
});
router.post('/',(req,res)=>{
    console.log(req.body);
    mongoose.model('subscribers').create(
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
        res.send("Doh Doh");
    });
const home =router;
module.exports = home;