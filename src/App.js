import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Eat from './Eat'
import Run from './Run'
import Home from './Home'
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path="/eat">
      <Eat/>
      </Route>
      <Route exact path="/run">
      <Run/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
