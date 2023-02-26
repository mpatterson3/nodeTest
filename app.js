
const express = require("express");
const app = express();
const cors = require('cors');
const indexRouter = require("./routes/index");
const subscriberRouter = require("./routes/subscribers");
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://mpatterson3:Destiny10161971@cluster0.etaow.mongodb.net/?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.on('connection',()=>{
     console.log('connected to db');
});
const subscriberSchema = {
    fname:String,
    lname:String,
    phone:String,
    email:String
};
mongoose.model('subscribers',subscriberSchema);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use("/",indexRouter);
app.use("/subscribers",subscriberRouter);
app.set('view engine','pug')
const port = process.env.PORT || 3001;



app.listen(port,()=>{
    console.log("wassup on port ",port);
});


  
