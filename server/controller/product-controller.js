import Products from '../model/ProductSchema.js ';

export const getProducts = async(req,res) => {
    try {
        const product = await Products.find({});
        return res.json(product);
    } catch (error) {
        console.error(error);
    }
}