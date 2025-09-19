import express from 'express'
import { addFood,listFood ,removeFood} from "../controller/food.controller.js";
import multer from 'multer'

const foodRouter=express.Router()

// Image storage Engin

const storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()} ${file.originalname}`)
    }
})
const upload=multer ({storage:storage})


// Routes
foodRouter.post('/add',upload.single('image'),addFood)
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFood)



export default foodRouter;