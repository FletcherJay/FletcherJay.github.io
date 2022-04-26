import React from 'react'
import { Card } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
    
    <Card bg="dark" style={{ borderRadius: '0px' }}>
    <Card.Body>
      <Card.Footer style={{ textAlign: 'center' }}>
      <small className="text-muted" style={{ textAlign: 'center' }}>Created by @Fletcher Johnson </small>
      <small className="text-muted" style={{ textAlign: 'right' }}>| Built with React</small>
      </Card.Footer>
      </Card.Body>
      </Card>
  </div>
  )
}

export default Footer