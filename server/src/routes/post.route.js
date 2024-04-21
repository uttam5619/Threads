import express from 'express'
import { deletePost, getAllPost, getPost, likeUnlikePost, updatePost, uploadPost, reply, getFeeds } from '../controllers/post.controller.js'
import isLoggedIn from '../middleware/isLoggedIn.middleware.js'

const postRoute= express.Router()

postRoute.post('/', isLoggedIn, uploadPost)
postRoute.get('/', isLoggedIn, getAllPost)

postRoute.delete('/:id', isLoggedIn, deletePost)
postRoute.put('/:id', isLoggedIn, updatePost)
postRoute.get('/:id', isLoggedIn, getPost)
postRoute.post('/:id', isLoggedIn, likeUnlikePost)

postRoute.post('/reply/:id', isLoggedIn, reply)
postRoute.get('/feed',isLoggedIn, getFeeds)

export default postRoute