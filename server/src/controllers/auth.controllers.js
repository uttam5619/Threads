import User from "../models/user.model.js"
import { profile_logo } from "../utils/constants.js"
import cloudinary from 'cloudinary'
import fs from 'fs/promises'


const cookieOptions={
    httpOnly: true,
    secure: true,
    maxAge: 7*24*60*60*1000
}

const signUp =async(req, res)=>{
    const {name, username, email, password} = req.body
    if(!name || !username || !email || !password){
        return res.status(400).json({success: false, message:'please provide mandatory details'})
    }
    const user = await User.findOne({email})
    if(user){
        return res.status(400).json({success: false, message:'an user with same email already exists'})
    }

    const registeredUser = await User.create(
        {
            name,
            username,
            email, 
            password,
            avatar:{
                public_id:email,
                secure_url: profile_logo
            }
        }
    )
    if(!registeredUser){
        return res.status(500).json({success: false, message:'failed to register the user'})
    }

    if(req.file){
        console.log('file details',JSON.stringify(req.file))
        try{
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'Threads',
                width:250,
                height: 250,
                gravity: 'faces',
                crop: 'fill'
            })
            if(result){
                console.log(result)
                console.log(result.secure_url)
                registeredUser.avatar.public_id = result.public_id
                registeredUser.avatar.secure_url = result.secure_url
                //remove file from server
                fs.rm (`uploads/${req.file.filename}`)
            }
        }catch(err){
            return res.status(400).json({success:false, message:err.message})
        }
    }

    await registeredUser.save()
    const token = await registeredUser.generateAccessToken()
    res.cookie('token', token, cookieOptions)
    return res.status(200).json({success: true, message:'user successfully registered', data: registeredUser})
    
}

const signIn =async(req, res)=>{
    const { email, password } = req.body
    if(!email || !password){
        return res.status(400).json({success: false, message:'provide mandatory details'})
    }
    const user = await User.findOne({email}).select('-password')
    if(!user){
        return res.status(400).json({success: false, message:'user not found'})
    }
    const token = await user.generateAccessToken()
    res.cookie('token', token, cookieOptions)
    return res.status(200).json({success: true, message:'login successfullly', data:user})

}

const logOut =(req, res)=>{
    res.cookie('token', null, cookieOptions)
    return res.status(200).json({success:true, message:'logOut successfully'})
}


export {
    signUp,
    signIn,
    logOut,
}