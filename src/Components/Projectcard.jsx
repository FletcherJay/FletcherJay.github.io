import React, { useRef } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap'
import Bonsai from '../Bonsai.JPG'
import { useState } from 'react'
import { useRef } from 'react'
const Projectcard = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

  return (
    <div>
      <CardGroup >
  <Card bg="dark" text="light">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text >
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
      <div>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
        <Button href="https://www.konaorchidsociety.org/" target="_blank" variant="secondary" size="sm">
          Live Site
        </Button>{' '}
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="dark" text="light">
    <Card.Img variant="top" src={Bonsai} />
    <Card.Body>
      <Card.Title>Scrum App</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <div>
        <Button href="#" variant="secondary" size="sm">
          Demo
        </Button>{' '}
        <Button href="#" variant="secondary" size="sm">
          View Code
        </Button>{' '}
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="dark" text="light">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <div>
        <Button href="#" variant="secondary" size="sm">
          Demo
        </Button>{' '}
        <Button href="#" variant="secondary" size="sm">
          View Code
        </Button>{' '}
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

    </div>
  )

}
render(<Projectcard />);
export default Projectcard