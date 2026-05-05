import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '10px', marginBottom: '50px' }}>
        {/* this is used to active any of the link in the site */}
        <NavLink style={({ isActive }) => ({ 
          color: isActive ? "white" : "black", 
          backgroundColor: isActive ? "gray" : "transparent", 
          padding: "5px 10px", 
          borderRadius: "5px", 
          textDecoration: "none" 
        })} 
        to={'/'}>Home</NavLink>

        <NavLink style={({ isActive }) => ({ 
          color: isActive ? "white" : "black", 
          backgroundColor: isActive ? "gray" : "transparent", 
          padding: "5px 10px", 
          borderRadius: "5px", 
          textDecoration: "none" 
        })}
        to={'/about'}>About</NavLink>
        
        <NavLink style={({ isActive }) => ({ 
          color: isActive ? "white" : "black", 
          backgroundColor: isActive ? "gray" : "transparent", 
          padding: "5px 10px", 
          borderRadius: "5px", 
          textDecoration: "none" 
        })}
        to={'/contact'}>Contact Us</NavLink>
      </div>
    </>
  )
}

export default Navbar