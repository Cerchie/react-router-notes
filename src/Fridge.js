import React from 'react';
import { Link} from 'react-router-dom';

      
const Fridge = () => 
{ 
    return    ( 
        <div className="fridge">
        <Link exact to="/popcorn" className="navlink">Vending Machine Popcorn $3.99</Link>
        <Link exact to="/jello" className="navlink">Vending Machine Jello $35.77</Link>
        <Link exact to="/vegemite" className="navlink">Vending Machine Vegemite $100.89</Link>
      </div>)}

export default Fridge;