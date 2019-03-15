import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ColourPicker from './ColourPicker';
import NavBar from './NavBar';
import Home from './Home';
import Today from './Today';
import Soon from './Soon';
import Future from './Future';
import Footer from './Footer';


import {
  BrowserRouter as Router,
  Route,
  Switch,
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
          <Header primary={this.state.primary} >THINGS TO DO</Header>
          <ColourPicker 
            onPrimaryChange={ this.handlePrimaryChange } 
            onSecondaryChange={ this.handleSecondaryChange } 
            primary={this.state.primary} 
            secondary={this.state.secondary}
          />
          <NavBar />
          <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/today" component={ Today }/>
          <Route exact path="/soon" component={ Soon }/>
          <Route exact path="/in-the-future" component={ Future }/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
