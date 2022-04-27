import { React, useState, useRef } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap'
import Kosheader from "../Media/screencapture-konaorchidsociety-org-2022-04-22-11_58_52 (2).png"
import { Overlay,  Modal } from 'react-bootstrap'
import Kindex from "../Media/Aurora_Kp_Map_North_America.gif"
import Scrumholder from "../Media/scrumapp.png"
import ScrumDemo from "../Media/2022-04-24 13-57-09.mp4"
import demoKoa from "../Media/screencapture-konaorchidsociety-org-2022-04-22-11_58_52.png"
import Nasavid from "../Media/2022-04-25 12-53-26.mp4"
const Projectcard = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [lgShow, setLgShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  return (
    <div>
      <Card bg="dark" text="light" style={{ borderRadius: '0px' }}>
        <Card.Title><h1>Portfolio</h1>
        </Card.Title>
      </Card>
      
      <CardGroup >
  <Card bg="dark" text="light" style={{ borderRadius: '0px' }}>

    <Card.Img variant="top" src={Kosheader} />
    <Card.Body>
      <Card.Title>Kona Orchid Society</Card.Title>
      <Card.Text >
        This is my first comissioned website I created. It helped me learn the full experience of creating a website, from sales, and marketing, to working with a team (their club members) to be able to have a completed project.
      </Card.Text>
    </Card.Body>
      <div>
      <>
      <Button  onClick={() => setLgShow(true)} variant="secondary" size="sm">
        Demo
      </Button>{' '}
     
          <Modal 
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            
              <Modal.Header closeButton>
              <Modal.Body>
                <Card.Img src={demoKoa} ></Card.Img>
              </Modal.Body>
              </Modal.Header>
            
          </Modal>
       
     
    </>
        <Button href="https://www.konaorchidsociety.org/" target="_blank" variant="secondary" size="sm">
          Live Site
        </Button>{' '}
      </div>

  </Card>
  <Card bg="dark" text="light">
    <Card.Img variant="top" src={Scrumholder} />
    <Card.Body>
      <Card.Title>Scrum App</Card.Title>
      <Card.Text>
        This project helped me learn about how dynamic react could be especially if you utalize its amazing library, and its amazing developer following. Also became really helpfull for me to narrow down what to do and when to do it while building this site.{' '}
      </Card.Text>
    </Card.Body>
    <div>
    <>
      <Button ref={target} onClick={() => setShow(!show)} variant="secondary" size="sm">
        Demo
      </Button>{' '}
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <div className="ratio ratio-16x9">
            <video src={ScrumDemo} controls{...props}>
              
            </video>
          </div>
        )}
      </Overlay>
    </>
        <Button href="https://github.com/FletcherJay/Scrum-React" target="_blank" variant="secondary" size="sm">
          View Code
        </Button>{' '}
      </div>

  </Card>
  <Card bg="dark" text="light" style={{ borderRadius: '0px' }}>
    <Card.Img variant="top" src={Kindex} />
    <Card.Body>
      <Card.Title>Nasa Api</Card.Title>
      <Card.Text>
        This project I learned a ton about how APi's work and my DOM manipulation skills were put to the test.
      </Card.Text>
    </Card.Body>
    <div>
    <Button  onClick={() => setSmShow(true)} variant="secondary" size="sm">
        Demo
      </Button>{' '}
     
          <Modal 
          size="lg"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            
              <Modal.Header closeButton>
              <Modal.Body>
                <div className="ratio ratio-16x9">
                  <iframe src={Nasavid} controls>
              
                  </iframe>
                </div>
              </Modal.Body>
              </Modal.Header>
            
          </Modal>
        <Button href="https://github.com/FletcherJay/NASA-API-bot" target="_blank" variant="secondary" size="sm">
          View Code
        </Button>{' '}
      </div>

  </Card>
</CardGroup>

    </div>
  )
}

export default Projectcard