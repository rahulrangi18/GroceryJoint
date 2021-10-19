import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    id: String,
    // url: String,
    imgsrc: String,
    title:String,
    // price:Object,
    // description:String,
    // discount:String,
    // tagline:String,
    sname:String,
})

const Products = mongoose.model('product', productSchema);

export default Products;