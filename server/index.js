import app from './app.js'
import { config } from 'dotenv'
import connectDB from './src/config/db.config.js'
import { v2 as cloudinary } from 'cloudinary' 
config()

const PORT =process.env.PORT || 7080


cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET
})

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
    connectDB()
})