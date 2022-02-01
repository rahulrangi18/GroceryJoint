import express from 'express';
import {userSignup,userLogin,googlelogin,} from '../controller/user-controller.js'
import {sellerSignup,sellerLogin} from '../controller/seller-controller.js'
import {getProducts} from '../controller/product-controller.js'
import { storeProduct } from '../controller/store-controller.js';
const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.post('/SellerSign', sellerSignup);
router.post('/SellerLogin', sellerLogin);
router.post('/api/googlelogin', googlelogin);
router.post('/newProduct', storeProduct);

router.get('/products',getProducts);

export default router;