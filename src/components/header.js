import React from "react";
import { Navbar, NavDropdown ,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class Header extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
              Complaint & Feedback System
            </Navbar.Brand> 
            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
              <Nav>
                <NavDropdown title="Complaints" id="collasible-nav-dropdown">
                  <NavDropdown.Item >Academics</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item >Infrastructure</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item >Sanitation</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item >Miscellaneous</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#feedback">Feedback</Nav.Link>
                <Nav.Link href="#myComplaints">My Complaints</Nav.Link>                
              </Nav>
              </ul>
          </Navbar>
        );
    }
}


