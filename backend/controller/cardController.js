import userModel from "../model/user.model.js";

// add item to usercard
const addToCart=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId)
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1
        }else{
            cartData[req.body.itemId]+=1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({
            sucess:true,
            message:'Added To cart'
        })
        
    } catch (error) {
       res.json({
        sucess:false,
        message:'Error'
       })
        
        
    }

}

// Remove items from userCart

const removeFromCart=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId)
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({sucess:true,message:"Remove from cart"})
    } catch (error) {
        console.log(error);
        res.json({sucess:false,messsage:'Error'})
        
        
    }

}

// fetch user cart data

const getCart=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId)
        let cartData=await userData.cartData;
        res.json({sucess:true,cartData})
    } catch (err) {
     console.log(err);
     res.json({sucess:false,message:'Error'})
        
    }

}

export{
    addToCart,
    removeFromCart,
    getCart
}
