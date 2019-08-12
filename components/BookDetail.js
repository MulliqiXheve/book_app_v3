import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class BookDetail extends React.Component {
       
  constructor(props) {
    
    super(props);
    this.state = {
      img: "javascriptBook",
      bookName: "JavaScript and JQuary "
      

    }
  }

  render() {
    const formStyle = {
          
        margin: '40px',
        border: '5px solid gray',
        width: '45%'
      };
    return(
        <div style={formStyle}>
        <Container >
            <Row >
                <Col>
                <div>
              <Card style={{ width: '18rem' }}>
                  
             <Card.Img  src={'./img/' + this.state.img + '.png'}  /> 
             <Card.Body>
               <Card.Title>{this.state.bookName}</Card.Title>
               
               <Button variant="danger">Delete</Button>
            
               <Button variant="secondary">Edit</Button>
             </Card.Body>
           </Card>
          </div>
                </Col>
                <Col>
                <h2>JavaScript and JQuary </h2>
                <p>This is a book about JavaScript, programming, and the wonders of the digital. You can read it online here, or get your own paperback copy.
                Written by Marijn Haverbeke.Licensed under a Creative Commons attribution-noncommercial license. All code in this book may also be considered licensed under an MIT license.
                Illustrations by various artists: Cover and chapter illustrations by Madalina Tantareanu. Pixel art in Chapters 7 and 16 by Antonio Perdomo Pastor. Regular expression diagrams in Chapter 9 generated with regexper.com by Jeff Avallone. Village photograph in Chapter 11 by Fabrice Creuzot. Game concept for Chapter 15 by Thomas Palef.</p>
                </Col>
                
            </Row>
            
            </Container>
       
          </div>
              
          
    );
    }
}
export default BookDetail;