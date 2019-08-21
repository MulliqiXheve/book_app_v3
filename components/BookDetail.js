import React from 'react';
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import Image from "react-bootstrap/Image"

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Modal } from 'react-bootstrap';

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

// const addBookbutton = {
//   margin: "15px",
//   border: "5px solid gray",
//   width: "60%"
// }; Took off the style in the back of Detail
function BookDetail(props) {


  return (
    
     
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Detail
        </Modal.Title>
      </Modal.Header>
      <div>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <div>
                  {/* <Card style={addBookbutton}> */}
                    <div className="text-center">

                      <div>
                        <Image
                          variant="top"
                          src="static/images/javascriptBook.png"

                        />

                      </div>
                    </div>
                  {/* </Card> */}
                </div>
              </Col>
              <Col>
                <div>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2>JavaScript and JQuery </h2>
                          <p>This is a book about JavaScript, programming, and the wonders of the digital. You can read it online here, or get your own paperback copy.
                          Written by Marijn Haverbeke.Licensed under a Creative Commons attribution-noncommercial license. All code in this book may also be considered licensed under an MIT license.
                Illustrations by various artists: Cover and chapter illustrations by Madalina Tantareanu. Pixel art in Chapters 7 and 16 by Antonio Perdomo Pastor. Regular expression diagrams in Chapter 9 generated with regexper.com by Jeff Avallone. Village photograph in Chapter 11 by Fabrice Creuzot. Game concept for Chapter 15 by Thomas Palef.</p>

                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </div>
      </Modal>
      );
    }
  
export default BookDetail;