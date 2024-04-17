import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const isLoggedIn =async (req, res, next)=>{
    try{
        const token = req.cookie.access_token
        if(!token){
            return res.status(401).json({success:false, message:'Access Denied'})
        }
        const decodedPayload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedPayload._id).select('-password')
        if(!user){
            return res.status(503).json({success:false, message:'failed to fetch userdetails from database'})
        }
        req.user = user
        next()
    }catch(err){
        console.log(err.message,err)
    }
}

export default isLoggedIn