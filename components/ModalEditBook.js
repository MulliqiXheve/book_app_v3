import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


function ModelEditBook(props) {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Edit a book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="formAddBook">
                    <Form.Label>Book Name</Form.Label>
                    <br />
                    <Form.Control type="search" placeholder="search" />
                  </Form.Group>
                  <br />

                  <Form.Group controlId="formImage">
                    <Form.Label>Image</Form.Label>
                    <br />
                    <br />
                    <Form.Control type="image" placeholder="Upload image" />
                    Upload Image
                  </Form.Group>
                  <br />

                  <Form.Group controlId="formImage">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="$" />
                  </Form.Group>
                  <br />

                  <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <br />
                    <Form.Control type="text" />
                  </Form.Group>
                  <br />
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" type="add">
            Close
          </Button>
          <Button variant="primary">Edit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModelEditBook;
