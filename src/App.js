import React, { Component } from 'react';
import './App.css';
import Header from './Header';
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
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header>THINGS TO DO</Header>
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
