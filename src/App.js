import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>THINGS TO DO</Header>
        <NavBar></NavBar>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
