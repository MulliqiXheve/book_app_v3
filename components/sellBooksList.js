import ModalEditBook from './ModalEditBook';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




function SellBookList () {

 const [modalShow, setModalShow] = React.useState(false);
  return(
       <div>
    <Card> 
              <Card.Img  src={"static/images/javascriptBook.png"}  /> 
              <Card.Body>
                <Card.Title>Java Script 5$</Card.Title>
                <Button  onClick={() => setModalShow(true)} variant="success">Edit</Button>

              </Card.Body>
            </Card>
            <ModalEditBook
            show={modalShow}
            onHide={() => setModalShow(false)}
           />
       </div>
    );
}

export default SellBookList;