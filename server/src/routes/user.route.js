import express from 'express';
import { deleteUser, getAllUsers, getUser, isFollowing, updateUser } from '../controllers/user.controller.js';
import isLoggedIn from '../middleware/isLoggedIn.middleware.js';
const userRoute = express.Router()

userRoute.put('/update/:id',isLoggedIn, updateUser)
userRoute.delete('/delete/:id',isLoggedIn, deleteUser)
userRoute.get('/:id',isLoggedIn, getUser)
userRoute.get('/',isLoggedIn, getAllUsers)
userRoute.post('/follow/:id',isLoggedIn, isFollowing)


export default userRoute