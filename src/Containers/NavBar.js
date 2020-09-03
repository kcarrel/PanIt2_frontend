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
            <Navbar bg="dark" className="d-flex justify-content-between">
                <Navbar.Brand href="">
                    PanIt
                </Navbar.Brand>
                <NavDropdown bg="black" title="Menu" id="collasible-nav-dropdown" style={{ color: "#5299d3" }}>
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

