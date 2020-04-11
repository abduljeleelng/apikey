//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        require:true
    },
    name:{
        type:String,
        trim:true,
        require:true
    },
    phone:{
        type:String,
        trim:true,
        require:true
    },
    age:{
        type:Number,
        trim:true,
        require:true
    },
    key:{
        type:String,
        trim:true
    }
});
module.exports=mongoose.model("User",userSchema);