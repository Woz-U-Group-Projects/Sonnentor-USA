import React from 'react';
import { Navbar } from 'react-bootstrap';

import { NavItem } from 'react-bootstrap';
//import {  Header } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return <Navbar>
  
    
        <NavItem eventKey={1} href="/Home"> Home </NavItem>
        <NavItem eventKey={2} href="/About"> About </NavItem>
        <NavItem eventKey={4} href="/Cart"> Cart </NavItem>
        <NavItem eventKey={3} href="/Sale"> Shop </NavItem>
   
</Navbar>;
    }}

export default Header;