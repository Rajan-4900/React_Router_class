import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div style={{backgroundColor:'white', padding:'10px'}}>
    <Link style={{margin:'10px', }} to={'/'}>Home</Link>
    <Link style={{margin:'10px', }} to={'/about'}>About</Link>
    <Link style={{margin:'10px', }} to={'/contact'}>Contact Us</Link>
    </div>
    </>
  )
}

export default Navbar