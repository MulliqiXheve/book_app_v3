import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn() {
  const formStyle = {
    margin: "40px",
    border: "5px solid gray",
    width: "45%"
  };
  const buttonstyle = {
    width: "100%"
  };

  return (
    <Form style={formStyle}>
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
      <Button style={buttonstyle} variant="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
}
export default SignIn;
