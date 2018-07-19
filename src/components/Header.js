import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

<Navbar>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="/Home"> Home </a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavItem eventKey={1} href="/About"> About </NavItem>
        <NavItem eventKey={2} href="/Cart"> Cart </NavItem>
        <NavDropdown eventKey={3} href="/Sale"> Shop
            <MenuItem eventKey={3.1}>Teas</MenuItem>
            <MenuItem eventKey={3.2}>Spices</MenuItem>
            <MenuItem eventKey={3.3}>Honeys</MenuItem>
        </NavDropdown>
    </Nav>
</Navbar>;

export default Header;