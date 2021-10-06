import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    fullname:{
        type: 'string',
        required: true,
        trim: true,
        min:3,
        max:20,

    },
    email:{
        type: String,
        required:true,
        trim:true,
        min:3,
        max:20,
        lowercase:true
    },
    password:{
        type: String,
        required:true,
        min:6,
        max:20,
    },
    phone:{
        type:Number,
    }
})
//Password Hashing
userSchema.pre('save',async function (next) {
    try{
               const salt= await bcrypt.genSalt(10)
               const hashedPassword= await bcrypt.hash(this.password,salt)
               this.password=hashedPassword
               next()
    }
    catch(error)
      {
          next(error)
      }
})

const User=mongoose.model('user',userSchema);

export default User;

