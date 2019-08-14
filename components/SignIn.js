import React from "react";
import Form from "react-bootstrap/Form";
import { Modal } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

function SignIn(props) {
  // const formStyle = {
  //   margin: "40px",
  //   border: "5px solid gray",
  //   width: "45%"
  // };
  // const buttonstyle = {
  //   width: "100%"
  // };

  return (

  <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please, fill out the sign in form!!
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
      <h1>Sign In</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>


  );
}
export default SignIn;
