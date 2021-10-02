import express from 'express';
import {userSignup} from '../controller/user-controller.js'

const router = express.Router();

router.post('/signup', userSignup);
// router.post('/login', userLogin);

export default router;