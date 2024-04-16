import { Schema, model } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required:[true, 'name is requiered'],
        lowercase: true,
        minLength: [3, 'the name should contain atleast 3 characters'],
        maxLength: [60, 'the username should not contain more than 60 characters'],
    },
    username:{
        type: String,
        trim: true,
        required:[true, 'name is requiered'],
        lowercase: true,
        unique:true,
        minLength: [3, 'the name should contain atleast 3 characters'],
        maxLength: [60, 'the name should not contain more than 60 characters'],
    },
    email :{
        type: String,
        trim: true,
        required:[true, 'email is requiered'],
        unique: true,
        index: true,
    },
    password:{
        type: String,
        required:[true, 'password is requiered'],
        trim: true,
        lowercase: true,
        select:false,
        minLength: [6, 'the password should contain at least 6 characters'],
        maxLength: [100, 'the password should not contain more than 100 characters'],
    },
    avatar:{
        secure_url:{
            type:String, //cloudinary url
            required:true
        },
        public_id:{
            type:String, //cloudinary url
            required:true
        }
    },
    followers:{
        type:String,
        default:0
    },
    following:{
        type:String,
        default:0
    },
    description:{
        type:String,
        trim:true,
        lowercase:true,
        maxLength:[150, 'the description should not be greater than 150 characters']
    }
},{timestamps:true})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods ={
    generateAccessToken:async function(){
        return await jwt.sign(
            {id:this._id, username:this.username, email:this.email},
            process.env.ACCESS_TOEKN_SECRET,
            {expiresIn:'5m'}
        )
    },
    comparePassword: async function(password){
        return await bcrypt.compare(password,this.password)
    }
}

const User= model('User', userSchema)
export default User