import User from "../models/user.model.js"

const updateUser=async (req, res)=>{
    try{
        const { id }= req.params
        if(!id){
            return res.status(400).json({success: false, message:'provide a unique id'})
        }
        const user = await User.findByIdAndUpdate(
            id,
            {
                $set: req.body
            },
            {
                runValidators:true
            }
        )
        if(!user) return res.status(404).json({success: false, message:'user not found'})
        return res.status(200).json({success: true, message:'user updated successfully'})
        
    }catch(err){
        console.log(err.message, err)
    }

}

const deleteUser=async (req, res)=>{
    try{
        const { id } =req.params
        if(!id) return res.status(400).json({success:false, message:'provide a unique id'})
        const user= await User.findById(id).select('-password')
        if(!user) return res.status(404).json({success:false, message:'user not found'})
        await User.findByIdAndDelete(user._id)
        return res.status(200).json({success: false, message:'user deleted successfully'})
    }catch(err){
        console.log(err.message, err)
    }
}

const getUser=async (req, res)=>{
    try{
        const { id } =req.params
        if(!id) return res.status(400).json({success:false, message:'provide a unique id'})
        const user= await User.findById(id).select('-password')
        if(!user) return res.status(404).json({success:false, message:'user not found'})
        return res.status(200).json({success:false, data:user})
    }catch(err){
        console.log(err.message, err)
    }
}

const getAllUsers=async (req, res)=>{
    try{
        const users= await User.find({}).select('-password')
        if(!users) return res.status(503).json({success:failed, message:'failed to fetch courses'})
        return res.status(200).json({success:true, data:users})
    }catch(err){
        console.log(err.message, err)
    }
}

const isFollowing = async(req, res)=>{
    try{
        const { id }= req.params
        const userToBeFollwed = await User.findById(id)
        const currentUser =await User.findById(req.user._id)

        if(!userToBeFollwed || !currentUser){
            return res.status(400).json({success: false, message:'User not found'})
        }
        if(id===req.user._id){
            return res.status(400).json({success:true, message:'This action is not allowed'})
        }

        const isFollowing = currentUser.following.includes(id)
        if(isFollowing){
            //unfollowUser
            await User.findByIdAndUpdate(req.user._id,{$pull:{following:id}})
            await User.findByIdAndUpdate(id, {$pull : {followers: req.user._id}})
        }else{
            //Follow user
            await User.findByIdAndUpdate(req.user._id, {$push: {following: id}})
        }
    }catch(err){
        res.status(500).json({success:false, errorMessage:err.message, data:err})
        console.log(err.message, err)
    }

}


export {
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
    isFollowing
}