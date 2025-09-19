import axios from 'axios'
import { createContext, useEffect, useState } from "react";

import { food_list } from "../assets/assets";         //food item ko dikhae ke liy hai 

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
    const[cartItem, setCartItem]=useState({});
    const url='http://localhost:4000';
    const[token,setToken]=useState('')
    
    // const [food_list,setFoodList]=useState([])

    const addToCart=async(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({
                ...prev,[itemId]:1
            }))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+ "/api/cart/add",{itemId},{headers:{token}})
        }
    }
     const removeFromCart=async(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
     }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for (const item in cartItem){
            if (cartItem[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item)
                totalAmount+=itemInfo.price*cartItem[item];
            }

        }
        return totalAmount;
    }
    const fetchFoodList = async () => {
        const response =  await axios.get(url+"/api/food/list")
        setFoodList(response.data)     
        
    }
// const loadCartData=async(token)=>{
//     const response=await axios.post(url+"api/cart/get",{},{headers:{token}})
//     setCartItem(response.data.cartData)
// }
// page relode hone k bad ye logout nahi hoga
    useEffect(()=>{
        async function loadData(){
                await fetchFoodList()
            if(localStorage.getItem('tokne')){
                 setToken(localStorage.getItem('tokne'))
            }
            // if(localStorage.getItem('tokne')){
            //  setToken(localStorage.getItem('tokne'))
            // }

        }
        loadData();

    },[])
    
    const contextValue={
       food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )


}
export default StoreContextProvider;