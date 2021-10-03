import mongoose from "mongoose";


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

const User=mongoose.model('user',userSchema);

export default User;