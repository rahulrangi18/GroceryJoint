import stores from '../model/StoreSchema.js';

export const storeProduct = async (request, response) => {
    try {
        // const exist = await Seller.findOne({ email: request.body.email });
        // console.log(exist);

        // if (exist) {
        //     // console.log(exist);

        //     console.log({ message: " User already exist" });
        //     return response.status(401).json({ message: "User already exist" });
        // }
        const seller = request.body;
        const newUser = new stores(seller);
        //password hashing
        console.log(newUser);
        await newUser.save();
        response.status(200).json(`${seller.full_name} has been successfully registered`);
        console.log(`${seller.full_name} has been successfully registered`);

    } catch (error) {
        console.log(error.message);
    }
}
