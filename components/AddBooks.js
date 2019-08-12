import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';





function addBook() {

const formStyle = {
    margin: '20px',
    border: '5px solid gray',
    padding: '40px',
    width: '100%',

  }
  const buttonstyle={
    width: '100%',
    height: '20px',
    padding: '25px',
    
  }
  // const labelStyle={
  //   width: '80p%',
  //   height: '80px',
  // }

  
  return (

    <Container>
    <Row>
    
    <Col>
    <Form style={ formStyle}>
             <h1>Add a Book</h1>

  <Form.Group controlId="formAddBook">
    <Form.Label>Book Name</Form.Label><br></br>
    <Form.Control type="search" placeholder="search" /></Form.Group><br></br>

  
  <Form.Group controlId="formImage"><Form.Label>Image</Form.Label><br></br>
  <br></br><Form.Control type="image" placeholder="Upload image" />Upload Image</Form.Group><br></br>

  <Form.Group controlId="formImage"><Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="$" /></Form.Group><br></br>

    <Form.Group controlId="formDescription">
    <Form.Label>Description</Form.Label><br></br>
    <Form.Control type="text" /></Form.Group><br></br>
  
  <Button  style ={buttonstyle} variant="outline-dark" type="add"><h6>Add</h6></Button>
</Form>
   </Col>

    <Col>
    <Form style={ formStyle}>
             <h1>Edit a book</h1>

  <Form.Group controlId="formAddBook">
    <Form.Label>Edit Book</Form.Label><br></br>
    <Form.Control type="search" placeholder="search" /></Form.Group><br></br>

  
  <Form.Group controlId="formImage"><Form.Label>Image</Form.Label><br></br>
  <br></br><Form.Control type="image" placeholder="Upload image" />Upload Image</Form.Group><br></br>

  <Form.Group controlId="formImage"><Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="$" /></Form.Group><br></br>
  

  <Form.Group controlId="formDescription">
    <Form.Label>Description</Form.Label><br></br>
    <Form.Control type="text" /></Form.Group><br></br>
  
  
  <Button  style ={buttonstyle} variant="outline-dark" type="add"><h6>Edit</h6></Button>
</Form>

   </Col>
</Row>



</Container>
     
    
  );
}

export default addBook;