import express from 'express';
import { logOut, signIn, signUp } from '../controllers/auth.controllers.js';

const authRoute = express.Router()


authRoute.post('/signup', signUp)
authRoute.post('/signIn', signIn)
authRoute.post('/logOut', logOut)



export default authRoute