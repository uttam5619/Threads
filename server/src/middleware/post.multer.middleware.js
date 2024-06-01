import multer from 'multer'
import path from 'path'

const uploadPostImage = multer({
    dest: 'uploads/',
    limits: { fileSize: 20*1024*1024},

    storage: multer.diskStorage({
        destination: 'uploads/',
        filename: function (req,file,cb){
            cb(null, file.originalname)
        }
    }),

    fileFilter: function(req,file,cb){
        const extension = path.extname(file.originalname)
        if( 
            extension == '.jpg' ||
            extension == '.jpeg' ||
            extension == '.png' ||
            extension == '.webp'
        ){
            cb(null, true)
        }else{
            cb(null, false)
            return
        }
    }
})

export default uploadPostImage