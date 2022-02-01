import mongoose from "mongoose"


const StoreSchema = new mongoose.Schema({
    // id: String,
    full_name:{
        type: "string",
        required: true,
        trim: true,
        min: 3,
        max: 20,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
        lowercase: true,
    },
    phone:{
        type: Number,
    },
    homeAddress:{
        type: "string",
        required: true,
        trim: true,
    },
    shopAddress:{
        type: "string",
        required: true,
        trim: true,
    },
    ShopName:{
        type: "string",
        required: true,
        trim: true,
    },
    ShopPhone:{
        type: Number,
    },
    productName:{
        type: "string",
        required: true,
        trim: true,
    },
    image_url:{
        type: "string",
    },
    Snumber:{
        type: Number,
    },
    // url: String,
    // imgsrc: String,
    // title:String,
    // // price:Object,
    // // description:String,
    // // discount:String,
    // // tagline:String,
    // sname:String,
})

const Stores = mongoose.model('store', StoreSchema);

export default Stores;