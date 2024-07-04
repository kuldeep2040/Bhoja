import React from 'react'
import {assets} from "../../assets/assets"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <img src={assets.logo} alt="" className="logo" />
       */}
       <div className="main-logo">
       <h1 className='logo'>Bhojan</h1>
       <p className='admin'>Admin Desk</p>
        </div>
      <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}

export default Navbar
