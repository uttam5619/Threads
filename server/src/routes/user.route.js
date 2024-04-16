import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.controller.js';
const userRoute = express.Router()

userRoute.put('/update/:id',updateUser)
userRoute.delete('/delete/:id', deleteUser)
userRoute.get('/:id',getUser)
userRoute.get('/',getAllUsers)

export default userRoute