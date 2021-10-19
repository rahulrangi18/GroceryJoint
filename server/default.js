import mongoose from "mongoose";
import {Products} from './constant/products.js'
import product from './model/ProductSchema.js'
const defaultProduct = async() => {
    try{
        await product.deleteMany();
        await product.insertMany(Products);
        console.log('Product Inserted successfully')
    } catch (error) {
        console.log('error',error.message)
    }
}

export default defaultProduct;