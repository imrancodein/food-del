import mongoose from "mongoose";

const foodSchema=new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:String, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true}

})
const userModel=mongoose.model('food', foodSchema)
export default userModel