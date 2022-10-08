const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("index.html");
});
router.post('/',(req,res)=>{
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
module.exports = router;