const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.post("/register", async (req,res)=>{
    const {name,password} = req.body;
    const userRegister = new User({
        name,password
    })

    const register = await userRegister.save();
    if(!register){
        return res.status(501).json({message:"user not register......."});

    }
    else{
        return res.status(201).json({message:"user  register successFully......."});
    }
})

module.exports = router;
