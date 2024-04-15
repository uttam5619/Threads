import app from './app.js'
import { config } from 'dotenv'
import connectDB from './src/config/db.config.js'
config()

const PORT =process.env.PORT || 7080


app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
    connectDB()
})