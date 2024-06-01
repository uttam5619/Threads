import Post from "../models/post.model.js"
import User from "../models/user.model.js"



const uploadPost =async (req, res) =>{
    try{
        const { postedBy, text, image} =req.body
        if(!postedBy){
            return res.status(400).json({success:false,message:'postedBy is required'})
        }
        const user = await User.findById(postedBy)
        if(!user){
            return res.status(404).json({success:false,message:'User not found'})
        }
        if(user._id.toString() !== req.user._id.toString()){
            return res.status(401).json({success:false,message:'you are not authorized'})
        }
        if(text.length>500){
            return res.status(400).json({success:false,message:'text must be less than 500 characters'})
        }

        const post= await Post.create(req.body)
        if(!post){
            return res.status(500).json({success:false,message:'failed to create the post'})
        }
        await post.save()
        return res.status(201).json({success:true, message:'post created successfully',data:post})

    }catch(err){
        console.log(err.message, err)
    }
}

const updatePost = async (req, res) =>{
    const { id }= req.params
    try{
        const post = await Post.findById(id)
        if(!post){
            return res.status(404).json({success:false, message:'post not found'})
        }
        await Post.findByIdAndUpdate(
            id,
            {
                $set: req.body
            },
            {
                runValidators:true
            }
        )
        return res.status(200).json({success:true, message:'post updated successfully'})
    }catch(err){
        console.log(err.message, err)
    }
}

const deletePost = async (req, res) =>{
    const { id }=req.params
    try{
        const post= await findById(id)
        if(!post){
            return res.status(404).json({success:false,message:'post not found'})
        }
        if(post.postedBy.toString() !== req.user._id.toString()){
            return res.status(401).json({success:false,message:'unauthorised to delete the post'})
        }
        await Post.findByIdAndDelete(id)
        return res.status(200).json({success:true,message:'post deleted successfully'})
    }catch(err){
        console.log(err.message, err)
    }
}

const getPost = async (req, res) =>{
    const { id }= req.params
    try{
        const post= await Post.findById(id)
        if(!post){
            return res.status(404).json({success:false,message:'post not found'})
        }
        return res.status(200).json({success:true, message:'post fetched successfully',data:post})
    }catch(err){
        console.log(err.message, err)
    }
}

const getAllPost = async (req, res) =>{
    try{
        const posts= await Post.find({}).populate('postedBy')
        if(!posts){
            return res.status(404).json({success:false,message:'posts not found'})
        }
        return res.status(200).json({success:true,data:posts})
    }catch(err){
        console.log(err.message, err)
    }
}

const likeUnlikePost = async (req, res) =>{
    try{
        const { id }= req.params
        const userId= req.user._id

        const post =await Post.findById(id)
        if(!post){
            return res.status(404).json({success:false, message:'post not found'})
        }
        const userLikedPost= post.likes.includes(userId)
        if(userLikedPost){
            //Unlike post
            await Post.findByIdAndUpdate(id, {$pull:{likes:userId}})
            return res.status(200).json({success:true,message:'unliked successfully'})
        }else{
            //Like post
            post.likes.push(userId)
            await post.save()
            res.status(200).json({success:true,message:'liked successfully'})
        }
    }catch(err){
        console.log(err.message, err)
    }
}

const reply =async (req, res) => {
    try{
        const { text }= req.body
        const postId= req.params.id
        const userId=req.user._id
        const userProfilePic= req.user.avatar.secure_url
        const username= req.user.username

        if(!text){
            return res.status(400).json({success:false,message:'text field is required'})
        }
        const post= await Post.findById(postId)
        if(!post){
            return res.status(404).json({success:false,message:'post not found'})
        }

        const reply ={userId, text, username, userProfilePic}
        post.replies.push(reply)
        await post.save()
        return res.status(200).json({success:true,message:'reply added successfully'})
    }catch(err){
        console.log(err.message, err)
    }
}

const getFeeds =async (req, res) =>{
    try{
        const userId= req.user._id
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({success:false, message:'user not found'})
        }
        const following = user.following
        const feedPosts= await Post.findById({postedBy:{$in:following}}).sort({createdAt:-1})
        return res.status(200).json({success:true, data: feedPosts})
    }catch(err){
        console.log(err.message, err)
    }
}

export {
    uploadPost,
    updatePost,
    deletePost,
    getPost,
    getAllPost,
    likeUnlikePost,
    reply,
    getFeeds
}