import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import ColourPicker from './ColourPicker';
import NavBar from './NavBar.jsx';
import Today from './Today.jsx';
import Footer from './Footer.jsx';


import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        primary: '#8dc4e8', 
        secondary: '#323234',
    };
    
    this.handleChange = this.handleChange.bind(this);  
}

handleChange(e) {    
  this.setState({ primary: e.currentTarget.value });
  this.setState({ secondary: e.currentTarget.value });
}

  render() {
    return (
      <Router>
        <div className="App">
          <Header>THINGS TO DO</Header>
          <ColourPicker onChange={ this.handleChange } />
          <NavBar />
          <Today />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
