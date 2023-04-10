var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var subscribersModel = require('../models');

router.get("/",(req,res)=>{
    res.render("../views/subscribers");
});
/* POST subscriber. */
router.post('/', async (req, res, next) => {
    try {
      const newSubscriber = new subscribersModel({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        // Add other properties from req.body as needed
      });
  
      await newSubscriber.save();
  
      res.status(201).json(newSubscriber);
    } catch (err) {
      next(err);
    }
  });
  
module.exports = router;