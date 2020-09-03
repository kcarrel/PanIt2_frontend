import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Containers/Login';
import NavBar from './Containers/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // loggedIn: this.check()
    }
  }
  
render() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>

        <Route exact path='/login' render={(props) => <Login {...props} />} />

      </Router>
    </div>
  );
  }
}

export default App;
