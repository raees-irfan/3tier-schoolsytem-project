const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User.Model');

//register route
//post 
router.post('/signup',async (req,res)=>{
    const {name ,email,password } = req.body;
    try{
        if(!name || !email || !password){
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        await newUser.save();
        return res.status(201).json({
            message: "User created successfully",
            user: newUser
        })


    }catch(error){
        console.error("Error during signup:", error);
        return res.status(500).json({
            message: error.message
        });
    }


})
module.exports = router;