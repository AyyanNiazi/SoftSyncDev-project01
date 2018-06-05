import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import './Navigationbar.css'

import  Firebase  from './../config/Fire.js'
import firebase, { auth, base,   provider } from './../config/Fire.js';

export default class Navigator extends React.Component{
   
    render(){
        return(            
            
            <Navbar default collapseOnSelect>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'> Indus University  </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                          <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                          </NavItem>
                          <NavItem eventKey={2} componentClass={Link} href="/" to="/adminLog">
                            Admin Login
                          </NavItem>
                          <NavItem eventKey={3} componentClass={Link} href="/" to="/studentLog">
                            Student Login
                          </NavItem>
                          <NavItem eventKey={4} componentClass={Link} href="/" to="/companyLog">
                            Company Login
                          </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                    
            
            </Navbar> 
        )
    }

}