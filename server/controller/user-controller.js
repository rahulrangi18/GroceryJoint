import express from 'express';
import User from '../model/userSchema.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const saltRounds = 12;
export const userSignup = async (request, response) => {
    const { fullname, phone, email, password } = request.body;
    try {
        const exist = await User.findOne({ email: request.body.email});
        // console.log(exist);

        if(exist) {
            // console.log(exist);

            console.log({'message':' User already exist'});
            return response.status(401 ).json({ 'message': 'User already exist'});
        }
        const hash = bcrypt.hashSync(password, saltRounds);
        const user = request.body;
        const newUser = new User({fullname, phone, email, password:hash});
        //password hashing
        console.log(newUser);
        await newUser.save();
        response.status(200).json(`${user.fullname} has been successfully registered`);
        console.log(`${user.fullname} has been successfully registered`);
        
    } catch (error) {
        // response.send('Error: ', error.message);
        console.log(error.message);
    }
}


export const userLogin = async (req, res) => {
    try {
        const {email,password}=req.body;
        const user = await User.findOne({ email: email});
        console.log(user); 
        if(user){
            const isMatch= bcrypt.compareSync(password,user.password);
            const token=await user.generateAuthToken();
            console.log(token);
            if(isMatch)
             {
                return res.status(200).json(`${user.fullname} has login successfully`);
             }
            else{
                return res.status(400).json({error:"Invalid Details"});
            }
        } else {
            return res.status(401).json('Invalid Login');
        }
    } catch (error) {
        console.log(error.message);
    }
}