import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Form, FormControl, Button  } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import rtf from "../Media/Fletchers-Resume.pdf"


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
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Button href={rtf} target="_blank" variant="outline-success" without rel="noopener noreferrer">Resume</Button>
              
              <Nav.Link href="https://twitter.com/FletchMeister96" target="_blank"><FaTwitter/></Nav.Link>
              <Nav.Link href="https://github.com/FletcherJay" target="_blank"><FaGithub/></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/fletcher-johnson-ba0254111/" target="_blank"><FaLinkedin/></Nav.Link>

            </Nav>
            
              
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Mainnav