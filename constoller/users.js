const User = require('../model/users')
exports.signup = async (req, res)=>{
    const inValid = await User.findOne({username:req.body.username});
    if(inValid) return res.status(400).json({inValid:"username is not available"});
    const user = await new User(req.body); // req.body;
    await user.save((err,user)=>{
        if(err || !user) return res.status(401).json({message:"user failed to save"});
        res.status(200).json({message:"user save successfully"})
    })
};

exports.getuser = async (req, res)=>{
    const user = await User.findOne({username:req.body.username});
    if(!user) return res.status(401).json({message:"user not found"});
    res.status(200).json(user)
};