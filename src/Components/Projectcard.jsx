import { React, useState, useRef } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap'
import Bonsai from '../Bonsai.JPG'
import Kosheader from "../screencapture-konaorchidsociety-org-2022-04-22-11_58_52 (2).png"
import { Popover } from 'bootstrap'
import { OverlayTrigger, Overlay, Tooltip, Modal } from 'react-bootstrap'
import { render } from '@testing-library/react'
import Kindex from "../Aurora_Kp_Map_North_America.gif"
import Scrumholder from "../Scrum-app-holder.png"
import ScrumDemo from "../2022-04-24 13-57-09.mp4"
import demoKoa from "../screencapture-konaorchidsociety-org-2022-04-22-11_58_52.png"

const Projectcard = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [lgShow, setLgShow] = useState(false);
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
        This project helped me learn about how dynamic react could be especially if you utalize its amazing library, and its amazing developer following.{' '}
      </Card.Text>
    </Card.Body>
    <div>
    <>
      <Button ref={target} onClick={() => setShow(!show)} variant="secondary" size="sm">
        Demo
      </Button>{' '}
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <video src={ScrumDemo} width="750" height="500" controls{...props}>
            My Tooltip
          </video>
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
        <Button href="#" variant="secondary" size="sm">
          Demo
        </Button>{' '}
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