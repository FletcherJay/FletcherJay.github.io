import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Form, FormControl, Button  } from 'react-bootstrap'


function Mainnav() {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
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
              <Nav.Link href="#action2">Resume</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">GitHub</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Stack Overflow</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Youtube
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Mainnav