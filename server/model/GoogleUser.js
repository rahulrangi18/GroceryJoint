import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const googleuserSchema = new mongoose.Schema({
  given_name: {
    type: "string",
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  family_name: {
    type: "string",
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  name: {
    type: "string",
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
    lowercase: true,
  },
  sub: {
    type: String,
    required: true,
  },
  /* tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ] */
});
/* //token generation
googleuserSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
}; */
const GoogleUser = mongoose.model("googleusers", googleuserSchema);

export default GoogleUser;
