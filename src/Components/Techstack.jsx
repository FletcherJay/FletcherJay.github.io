import React from 'react'
import { Card } from 'react-bootstrap'
import { FaReact, FaJs, FaBootstrap, FaWordpress, FaGitAlt, FaGithub, FaTerminal, FaLinux, FaHtml5,FaCss3Alt, FaCogs } from "react-icons/fa";
import { Container,Row, Col } from 'react-bootstrap';
import { DiVisualstudio } from "react-icons/di";

const Techstack = () => {
  return (
    <div>
    <Card bg="success"  text="dark" style={{ borderRadius: '0px' }}>

      <Card.Body>
        <h5>SKILLS & TOOLS</h5>
        <h3>My Toolbox & Things I Can Do</h3>
        <div>
          <Container>
            
              <Row>
                <Col>
                  <h1><FaReact/></h1>
                    <p>React</p>
                </Col>
                <Col>
                <h1><FaJs/></h1>
                    <p>JavaScript</p>
                </Col>
                <Col>
                <h1><FaBootstrap/></h1>
                    <p>Bootstrap</p>
                </Col>
                <Col>
                <h1><FaWordpress/></h1>
                    <p>Word Press</p>
                </Col>
                <Col>
                <h1><FaGitAlt/></h1>
                    <p>Git</p>
                </Col>
                <Col>
                  <h1><FaGithub/></h1>
                    <p>Github</p>
                </Col>

              </Row>
              <Row>
              <Col>
                  <h1><FaHtml5/></h1>
                    <p>HTML</p>
                </Col><Col>
                  <h1><FaCss3Alt/></h1>
                    <p>CSS</p>
                </Col><Col>
                  <h1><FaCogs/></h1>
                    <p>REStfull API</p>
                </Col><Col>
                  <h1><DiVisualstudio/></h1>
                    <p>VS Code</p>
                </Col>
                <Col>
                  <h1><FaTerminal/></h1>
                    <p>Command Line</p>
                </Col>
                <Col>
                  <h1><FaLinux/></h1>
                    <p>Linux</p>
                </Col>
              </Row>
            
          </Container>
        </div>
      </Card.Body>
    </Card></div>
  )
}

export default Techstack