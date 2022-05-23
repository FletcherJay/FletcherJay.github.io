import { React, useState, useRef } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap'
import Kosheader from "../Media/screencapture-konaorchidsociety-org-2022-04-22-11_58_52 (2).png"
import { Overlay,  Modal } from 'react-bootstrap'
import Kindex from "../Media/nasaReact.png"
import Scrumholder from "../Media/scrumapp.png"
import ScrumDemo from "../Media/2022-05-22 17-27-25.mp4"
import demoKoa from "../Media/screencapture-konaorchidsociety-org-2022-04-22-11_58_52.png"
import Nasavid from "../Media/2022-05-17 15-45-37.mp4"
const Projectcard = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [lgShow, setLgShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [scrumShow, setScrumShow] = useState(false);
  
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
      <Button  onClick={() => setScrumShow(true)} variant="secondary" size="sm">
        Demo
      </Button>{' '}
      <Modal 
          size="lg"
          show={scrumShow}
          onHide={() => setScrumShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            
              <Modal.Header closeButton>
              <Modal.Body>
                <div className="ratio ratio-16x9">
                  <iframe src={ScrumDemo} controls>
              
                  </iframe>
                </div>
              </Modal.Body>
              </Modal.Header>
            
          </Modal>
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
        This project I learned a ton about how APi's work in React. In this project I use <b>six different API fetch requests</b>, the background picture changes daily with its description at bottom of picture, the latest solar events from NASA's  Space Weather Database Of Notifications, then I also gather the latest Nasa project ID's then map through those and query those projects individually, and finally I show the latest patent created by NASA at the very bottom of the page.
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