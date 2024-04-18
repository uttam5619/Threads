import express from 'express';
import { deleteUser, getAllUsers, getUser, isFollowing, updateUser } from '../controllers/user.controller.js';
import isLoggedIn from '../middleware/isLoggedIn.middleware.js';
const userRoute = express.Router()

userRoute.put('/update/:id',updateUser)
userRoute.delete('/delete/:id', deleteUser)
userRoute.get('/:id',getUser)
userRoute.get('/',getAllUsers)
userRoute.post('/follow/:id',isLoggedIn, isFollowing)


export default userRoute