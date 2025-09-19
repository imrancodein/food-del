import React, { useEffect, useState } from 'react'
import upload_area from '../../assets/upload_area.png'
import axios from 'axios'
import './Add.css'
import { toast } from 'react-toastify'

const Add = ({url}) => {
    // const url='http://localhost:4000';
    const[image,setImage]=useState(false)
    const [data, setData]=useState({
        name:'',
        description:'',
        price:'',
        category:'Salad'
    })
    // changeHandler function
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    // useEffect(()=>{
    //     console.log(data);
        
    // },[data])

    // submitHandler 
    const onSubmitHandler= async(e)=>{
      e.preventDefault();
        const formData=new FormData();
        formData.append('name',data.name)
        formData.append('description',data.description)
        formData.append('price',Number(data.price))
        formData.append('category',data.category)
        formData.append('image',image)
        const response = await axios.post(`${url}/api/food/add`,formData)
        console.log(response);
        
        if(response.data.sucess){
            setData({
                name:'',
                description:'',
                price:'',
                category:'Salad'
              })
              setImage(false)
              toast.success(response.data.message)
              
        }else{

            toast.error(response.data.message)
        }
    }
       return (
    <div className='add'>
       <form  className='flex-col' onSubmit={onSubmitHandler}>
        {/* upload image  */}
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img  src={image?URL.createObjectURL(image):upload_area} alt="" required />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required  />
        </div>
        {/* add product details */}
         <div className='add-product-name flex-col'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        {/* product description */}
        <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" placeholder='Write content here'></textarea>
        </div>
        {/* add category */}
        <div className="add-category-price">
           <div className="add-category flex-col">
             <p>Product Category</p>
            <select onChange={onChangeHandler}   name="category" >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure veg">Pure veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
            </select>
           </div>
        <div className="add-price flex-col"> 
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='Rs20' />
        </div>
        </div>
        {/* Addd price list */}
        <button type='submit' className='add-btn'>Add</button>
       </form>

    </div>
  )
}

export default Add