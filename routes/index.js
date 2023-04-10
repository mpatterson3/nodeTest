var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
router.get("/",(req,res)=>{
    res.render("../views/index");
});

const home =router;
module.exports = home;