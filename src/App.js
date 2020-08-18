import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import Clock from './component/clock.js';
import products from './component/productList.js';
import Calculator from './component/temperature.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/About">About</Link>
          <Link to="/Product">Product</Link>
          <Link to="/Temperature">Temperature</Link>
          <hr/>
          <Route path="/about" component={Clock}></Route>
          <Route path="/product" component={products}></Route>
          <Route path="/temperature" component={Calculator}></Route>
        </div>
      </Router>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
