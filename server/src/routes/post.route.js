import express from 'express'
import { deletePost, getAllPost, getPost, updatePost, uploadPost } from '../controllers/post.controller.js'
import isLoggedIn from '../middleware/isLoggedIn.middleware.js'

const postRoute= express.Router()

postRoute.post('/', isLoggedIn, uploadPost)
postRoute.get('/', getAllPost)

postRoute.delete('/:id', deletePost)
postRoute.put('/:id', updatePost)
postRoute.get('/:id', getPost)
postRoute.post('/:id',)

export default postRoute