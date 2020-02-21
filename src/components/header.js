import React , { Component } from "react";
import { Navbar, NavDropdown,Nav } from 'react-bootstrap';

export class Header extends Component{
    render(){
        return(
          <>
            <Navbar bg="dark" variant="dark" fixed="top" >
            <Navbar.Brand href="/">
              Complaint & Feedback System
            </Navbar.Brand> 
            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
              <Nav >
                <NavDropdown title="Complaints" >
                  <NavDropdown.Item href="/academics" >Academics</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/infrastructure">Infrastructure</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/sanitation">Sanitation</NavDropdown.Item><NavDropdown.Divider />
                  <NavDropdown.Item href="/miscellenous">Miscellaneous</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/feedback" >Feedback</Nav.Link>
                <Nav.Link href="/mycomplaints">My Complaints</Nav.Link>                
              </Nav>
              </ul>
          </Navbar>
          {/* <BrowserRouter><Route path="/academics" components={AcademicsForm}/></BrowserRouter> */}
          </>
        );
    }
}

