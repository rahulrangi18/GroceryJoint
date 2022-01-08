import Seller from "../model/sellSchema.js";
import bcrypt from "bcryptjs";



export const sellerSignup = async (request, response) => {
    try {
        const exist = await Seller.findOne({ email: request.body.email });
        console.log(exist);

        if (exist) {
            // console.log(exist);

            console.log({ message: " User already exist" });
            return response.status(401).json({ message: "User already exist" });
        }
        const seller = request.body;
        const newUser = new Seller(seller);
        //password hashing
        console.log(newUser);
        await newUser.save();
        response.status(200).json(`${seller.fullname} has been successfully registered`);
        console.log(`${seller.fullname} has been successfully registered`);

    } catch (error) {
        console.log(error.message);
    }
}

export const sellerLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Seller.findOne({ email: req.body.email });
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