import express from 'express'
import { deletePost, getAllPost, getPost, updatePost, uploadPost } from '../controllers/post.controller.js'
const postRoute = express.Router()

postRoute.post('/upload',uploadPost )
postRoute.put('/:id', updatePost )
postRoute.delete('/:id', deletePost )
postRoute.get('/:id', getPost )
postRoute.get('/:id', getAllPost )


export default postRoute