import {Schema, model} from 'mongoose'

const postSchema = new Schema({
    postedBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text:{
        type: String,
        trim: true,
        lowercase: true,
        maxLength: [500, 'post can not be greater than 500 characters']
    },
    image:{
        type: String, //cloudinary url
    },
    likes:{
        //likes should be an array of userId(s)
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: []
    },
    replies: [
        {
            userId: {
            type: Schema.Types.ObjectId,
            ref:'User',
            required: true
            },
            text: {
                type: String,
                required: true
            },
            userProfilePic: {
                type: String,
            },
            username:{
                type: String,
            }
        }
    ]
}, {timestamps:true})

const Post = model('Post', postSchema)
export default Post