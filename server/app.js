import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoute from './src/routes/auth.route.js';
import userRoute from './src/routes/user.route.js';
import postRoute from './src/routes/post.route.js';

const app= express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('api/v1/post', postRoute)


export default app