import express, { response } from "express";
import User from "../model/userSchema.js";
import GoogleUser from "../model/GoogleUser.js";
import bcrypt from "bcryptjs";
import {OAuth2Client} from 'google-auth-library'

const client=new OAuth2Client("548736927785-l1s640me1mmgc2it65d583kbrb16ueg2.apps.googleusercontent.com");

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ email: request.body.email });
    // console.log(exist);

    if (exist) {
      // console.log(exist);

      console.log({ message: " User already exist" });
      return response.status(401).json({ message: "User already exist" });
    }
    const user = request.body;
    const newUser = new User(user);
    //password hashing
    console.log(newUser);
    await newUser.save();
    response.status(200).json(`${user.fullname} has been successfully registered`);
    console.log(`${user.fullname} has been successfully registered`);
  } catch (error) {
    // response.send('Error: ', error.message);
    console.log(error.message);
    console.log("hthith")
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
     /*  const token = await user.createToken();
      console.log(token); */
      if (isMatch) {
        return res.status(200).json(`${user.fullname} has login successfully`);
      } else {
        return res.status(400).json({ error: "Invalid Details" });
      }
    } else {
      return res.status(401).json("Invalid Login");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const googlelogin = async (req,res) => 
{
  const{tokenId} = req.body;
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "548736927785-l1s640me1mmgc2it65d583kbrb16ueg2.apps.googleusercontent.com",
    })
    .then(async (response) => {
      try {
        const { given_name, family_name, name, email,sub } = response.payload;
         const exist = await GoogleUser.findOne({ email: email });
         if (exist) 
         {
           console.log(exist);
           console.log({ message: " User already exist" });
           return res.status(200).json({ message: "User already exist" });
         }
        const googleuser = response.payload;
        const newUser = new GoogleUser({given_name,family_name,name,email,sub});
        console.log(newUser);
        await newUser.save();
        res.status(200).json(`${googleuser.name} has been successfully registered`);
        console.log(`${googleuser.name} has been successfully registered`);
      } catch (error) {
        // response.send('Error: ', error.message);
        console.log(error.message);
      }
    });
   
};
