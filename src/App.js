import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Containers/Login';
import Collection from './Containers/Collection';
import AddItem from './Containers/AddItem';
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

        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/collection" render={(props) => <Collection {...props} />} />
        <Route exact path="/item" render={(props) => <AddItem {...props} />} />

      </Router>
      {/* <BottomNavigation id="bottom" showLabels>
        <BottomNavigationAction style={{ color: 'white' }} onClick={() => window.location.href = '/about'} label="About"  />
        <BottomNavigationAction style={{ color: 'white' }} onClick={() => window.location.href = '/contact'} label="Contact Us"  />
      </BottomNavigation> */}
    </div>
  );
  }
}

export default App;
