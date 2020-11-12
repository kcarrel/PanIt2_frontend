import React, { Component } from 'react';
import { Navbar, NavDropdown} from 'react-bootstrap';
export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {

        return (
          <Navbar className="d-flex justify-content-between navbar-dark">
            <Navbar.Brand href="">PanIt</Navbar.Brand>
            <NavDropdown
              title="Menu"
              alignRight
              id="collasible-nav-dropdown"
              flip
            >
              <NavDropdown.Item>Home</NavDropdown.Item>
              <NavDropdown.Item>My Account</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/collection">
                My Collection
              </NavDropdown.Item>
              <NavDropdown.Item href="/item">
                Add Item
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar>
        );
    }
}

