import React from 'react';
import './App.css';
import Nav from './components/nav/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Audio from './components/audio/audioOut';
import Home from './components/home/index';
import Setting from './components/setting/index';
import Product from './components/product/index';
import 'fontsource-roboto';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav/> */}
        <Audio/>
        <Route exact component={Home} path="/"/>
        <Route component={Setting} path="/setting"/>
        <Route component={Product} path="/product"/>
      </Router>
    </div>
  );
}

export default App;
