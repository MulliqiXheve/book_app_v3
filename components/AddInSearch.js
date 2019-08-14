import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class AddInSearch extends React.Component {
       
  constructor(props) {
    
    super(props);
    this.state = {
      img: "javascriptBook",
      bookName: "JavaScript and JQuery ",
      price: "5$"
      

    }
  }

  render() {
    return(
       
          <div>

              <Card style={{ width: '12rem' }}>
              
             <Card.Img  src={'/static/images/' + this.state.img + '.png'}  /> 
             <Card.Body>
               <Card.Title>{this.state.bookName}{this.state.price}</Card.Title>
               
               <Button variant="success">EDIT</Button>
            
               
             </Card.Body>
           </Card>

          </div>
    );
    }
}
export default AddInSearch;