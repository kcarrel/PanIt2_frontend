import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import { Navbar, NavDropdown} from 'react-bootstrap';
export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {

        return (
            <Navbar className="d-flex justify-content-between navbar-dark">
                <Navbar.Brand href="">
                    PanIt
                </Navbar.Brand>
                <NavDropdown title="Menu" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                        My Account
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/login">
                        Login
                    </NavDropdown.Item>
                </NavDropdown>
                
            </Navbar>
        );
    }
}

