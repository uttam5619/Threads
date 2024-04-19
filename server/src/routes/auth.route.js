import express from 'express';
import { logOut, signIn, signUp } from '../controllers/auth.controllers.js';
import isLoggedIn from '../middleware/isLoggedIn.middleware.js';

const authRoute = express.Router()


authRoute.post('/signUp', signUp)
authRoute.post('/signIn', signIn)
authRoute.post('/logOut', isLoggedIn, logOut)



export default authRoute