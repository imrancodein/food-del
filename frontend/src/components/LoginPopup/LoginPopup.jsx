import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'


const LoginPopup = ({setShowLogin}) => {
    const {url,setToken}=useContext(StoreContext)

    const [currentState, setCurrentState]=useState('Sign Up')
    const [data, setData]=useState({
        name:'',
        email:'',
        password:'',
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setData(data=>({...data,[name]:value}))

    }
    const onLogin=async(event)=>{
        event.preventDefault()
        let newUrl=url;
        if(currentState=='Login'){
            newUrl+='/api/user/login'
        }else{
            newUrl+='/api/user/register'
        }
        const response=await axios.post(newUrl,data)
        if(response.data.sucess){
            setToken(response.data.token)
            localStorage.setItem('tokne',response.data.token)
            setShowLogin(false)
            
        }else{
            alert(response.data.message)
        }

    }
    // useEffect(()=>{
    //     console.log(data);
        
    // },[data])
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState==='Login'?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder=' Enter your name' />}
                
                <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Enter your email' />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter your password' />
            </div>
            <button type='submit'>{currentState==='Sign Up'?'Create account':'Login'}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the term of use & provacy policy</p>
            </div>
            {
                currentState==='Login'?<p>Create a new account ? <span onClick={()=>setCurrentState('Sign Up')}>click here</span></p>
                :<p>Already have an account <span onClick={()=>setCurrentState('Login')}>Login here</span></p>
            }
            
            
        </form>

    </div>
  )
}

export default LoginPopup