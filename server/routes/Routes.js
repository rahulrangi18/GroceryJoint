import express from 'express';
import {userSignup,userLogin,googlelogin} from '../controller/user-controller.js'

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.post('/api/googlelogin', googlelogin);

export default router;