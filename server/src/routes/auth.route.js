import express from 'express';
import { logOut, signIn, signUp } from '../controllers/auth.controllers.js';
import isLoggedIn from '../middleware/isLoggedIn.middleware.js';
import uploadAvatar from '../middleware/avatar.multer.middleware.js';

const authRoute = express.Router()


authRoute.post('/signUp', uploadAvatar.single('avatar')  , signUp)
authRoute.post('/signIn', signIn)
authRoute.post('/logOut', logOut)



export default authRoute