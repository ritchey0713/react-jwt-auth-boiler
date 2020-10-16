import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Signin from "./components/Signin"
import Welcome from "./components/Welcome"
import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Signin} />
          <PrivateRoute path="/welcome" component={Welcome } />
        </Router>
      </div>
    );
  }
}

export default App;

/* <Route exact path="/welcome" component={Welcome} /> */