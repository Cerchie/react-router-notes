import React from 'react';
import { NavLink} from 'react-router-dom';
import './NavBar.css'    
      
const NavBar = () => 
{ 
    return    ( 
        <nav className="navbar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/eat">Eat</NavLink>
        <NavLink exact to="/run">Run</NavLink>
      </nav>)}

export default NavBar;