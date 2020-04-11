const User = require('../model/users')

exports.apiKeyValidator = async (req,res,next)=>{
    const apiKey = req.get('api');
    if(!apiKey) return res.status(401).json({status:false, message:"Api key is missing"});
    try{
        const key = await User.findOne({key:apiKey});
        if(!key) return res.status(400).json({status:false,message:"invalid apikey"})
        next();
    }catch(error){
        return res.status(400).json({status:false,message:"error in verifying apikey"})
    }
};