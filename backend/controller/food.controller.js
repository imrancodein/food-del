import foodModel from "../model/food.model.js";

import fs from 'fs'

// add food
const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
  try {
      await food.save()
    res.json({
        sucess:true,message:"Food Added "
    })
    
  } catch (err) {
    console.log(err);
    res.json({
        sucess:false,
        message:'Error'
    })
    
    
  }


}
// list food

const listFood=async(req,res)=>{
    const food=await foodModel.find({}) 
    try {
        res.json({
            sucess:true,
            date:food,
        })
    } catch (err) {
        console.log(err);
        res.json({
            sucess:false,
            message:'errro'
        })
        
        
    }
}

// Remove Food

const removeFood=async(req,res)=>{
try {
        const food=await foodModel.findById(req.body.id)
    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModel.findByIdAndDelete(req.body.id)
    res.json({
        sucess:true,
        message:'Food Removed'
    })
} catch (err) {
    console.log(err);
      res.json({
        sucess:false,
        message:'Error'
    })
    
}
}
export {addFood,listFood,removeFood}