import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Form, FormControl, Button  } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


function Mainnav() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Fletcher Johnson</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">Contact</Nav.Link>
              <Button href="#action1" target="_blank" variant="outline-success" >Resume</Button>
              
              <Nav.Link href="#action1"><FaTwitter/></Nav.Link>
              <Nav.Link href="#action1"><FaGithub/></Nav.Link>
              <Nav.Link href="#action1"><FaLinkedin/></Nav.Link>

            </Nav>
            
              
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Mainnav