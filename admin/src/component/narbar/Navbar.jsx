import React from 'react'
import './Navbar.css'
// import { assets } from '../../assets/assets'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_image.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={logo} />
        <img className='profile' src={profile} />

    </div>
  )
}

export default Navbar