import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class ConfirmBook extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          img: "Python", 
          bookName: "Python ",
          price: "$5"
        }
      }
        render (){
    
        const formStyle = {
            margin: '20px',
            //border: '5px solid gray',
            padding: '40px',
            width: '100%',
        
          }
          const buttonstyle={
            width: '100%',
            height: '20px',
            padding: '25px',
          }

          return(
  
  <div>

<Card style={{ width: '25rem' }}>
              
              <Card.Img   src={'/static/images/' + this.state.img + '.jpg'} /> 
              <Card.Body>
                <Card.Title>{this.state.bookName}</Card.Title>

                <Card.Title>Price {this.state.price}</Card.Title>

                <Button  style ={buttonstyle} variant="success" type="confirm">Confirm</Button>
                <br></br>
                <br></br>
                <Button  style ={buttonstyle} variant="secondary" type="edit">Edit</Button>
                
              </Card.Body>
            </Card>


  </div>
);
}
}

export default ConfirmBook;