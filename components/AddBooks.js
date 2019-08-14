import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function addBook() {

const formStyle = {
    margin: '20px',
    border: '5px solid gray',
    padding: '10px',
    width: '100%',

  }
  const buttonstyle={
    width: '100%',
    height: '5px',
    padding: '25px',
    
  }
  
  
  return (

        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
          
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">ADD</Button>
          </Modal.Footer>
        </Modal.Dialog>

    
  );
}

export default addBook;