import React from 'react';
import { NavLink} from 'react-router-dom';

      
const VendingMachine = () => 
{ 
    return    ( 
        <div className="fridge">
        <NavLink exact to="/" className="navlink">Fridge</NavLink>
        <NavLink exact to="/popcorn" className="navlink">Popcorn</NavLink>
        <NavLink exact to="/jello" className="navlink">Jello</NavLink>
        <NavLink exact to="/vegemite" className="navlink">Vegemite</NavLink>
      </div>)}

export default VendingMachine;