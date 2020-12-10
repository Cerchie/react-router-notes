import React from 'react'
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Popcorn from './Popcorn'
import Jello from './Jello'
import Vegemite from './Vegemite'
import Fridge from './Fridge'
import VendingMachine from './VendingMachine'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
  

      <Route exact path="/">
      <Fridge/>
      </Route>

      <Route exact path="/popcorn">
      <VendingMachine />
      <Popcorn/>
     
      </Route>

      <Route exact path="/jello">
      <VendingMachine />
      <Jello/>
   
      </Route>

      <Route exact path="/vegemite">
      <VendingMachine />
      <Vegemite/>
      
      </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
