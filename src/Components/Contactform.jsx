import React, { useState } from 'react'
import { Container, Form,Card, Button } from 'react-bootstrap'

const Contactform = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <Card bg="dark" text="light" style={{ borderRadius: '0px' }}>
    <a id="Contact"></a>
    <Container >
      <Form onSubmit={handleSubmit} ><h1>Contact Me</h1>
        <Form.Group controlId="form.Name">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required/>
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" required/>
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control as="textarea" rows={3} required/>
        </Form.Group>
      </Form>
      <Button variant="success" type="submit" >
        {status}
      </Button>
    </Container>
    </Card>
  )
}

export default Contactform