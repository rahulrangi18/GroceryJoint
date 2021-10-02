import express from 'express';
import User from '../model/userSchema.js';

export const userSignup = async (request, response) => {
    try {
        const exist = await User.findOne({ email: request.body.email,phone: request.body.phone});
        // console.log(exist);

        if(exist) {
            // console.log(exist);

            return response.status(401).json({ 'message': 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json(`${user.fullname} has been successfully registered`);
        
    } catch (error) {
        // response.send('Error: ', error.message);
        console.log(error.message);
    }
}