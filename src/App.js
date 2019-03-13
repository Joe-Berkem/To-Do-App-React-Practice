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
        primary: '', 
        secondary: '',
    };
    
    this.handlePrimaryChange = this.handlePrimaryChange.bind(this);
    this.handleSecondaryChange = this.handleSecondaryChange.bind(this);   
}

handlePrimaryChange(e) {    
  this.setState({ primary: e.currentTarget.value });
}
handleSecondaryChange(e) {   
  this.setState({ secondary: e.currentTarget.value });
}

  render() {
    return (
      <Router>
        <div className="App">
          <Header>THINGS TO DO</Header>
          <ColourPicker 
            onPrimaryChange={ this.handlePrimaryChange } 
            onSecondaryChange={ this.handleSecondaryChange } 
            primary={this.state.primary} 
            secondary={this.state.secondary}
          />
          <NavBar />
          <Today />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
