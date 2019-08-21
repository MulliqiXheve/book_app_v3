import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Book extends React.Component {
       
  constructor(props) {
    
    super(props);
    this.state = {
      img: "javascriptBook",
      bookName: "JavaScript and JQuery "
      

    }
  }

  render() {
    return(
       
          <div>

              <Card style={{ width: '18rem' }}>
              
             <Card.Img  src={'/static/images/' + this.state.img + '.png'}  /> 
             <Card.Body>
               <Card.Title>{this.state.bookName}</Card.Title>
               
               <Button variant="danger">Delete</Button>
            
               <Button variant="secondary">Edit</Button>
             </Card.Body>
           </Card>
          </div>
    );
    }
}
export default Book;