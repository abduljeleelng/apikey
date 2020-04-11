const express = require('express');
const app = express();
const morgan= require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

//App middleWare
const user = require('./route/users');

//Database connection with mongoose ODM
const db = process.env.MongoBD_URI || 'mongodb://127.0.0.1:27017/apikey';
const port = process.env.PORT || 2000;
const connectOption= { useNewUrlParser: true,useUnifiedTopology: true };
mongoose.
connect(db,connectOption).
then(()=>{console.log(`database is connected on port ${port}`)}).
catch(error=>{console.log(error)})


//Middleware Application 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//custom
app.get("/",(req,res)=>{
    res.json({app : "Application is working ...."})
});
app.get("/api",(req,res)=>{
    res.send({base:"Api base is now working successfully "})
});
app.use('/api',user)

//Port listening 
app.listen(port,()=>{console.log(`App is listening to port ${port}`)})

