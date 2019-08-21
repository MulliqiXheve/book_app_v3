import ModalEditBook from './ModalEditBook';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import BookDetail from './BookDetail';



function SellBookList () {
    const [modalShow, setModalShow] = React.useState(false);
    // const [modalShow2, setModalShow2] = React.useState(false);
     return(
          <>
             <Card>
             <Button onClick={() => setModalShow(true)}>
                 <Card.Img  src={"static/images/javascriptBook.png"}  /></Button>
                 <Card.Body>
                   <Card.Title>JavaScript 5$</Card.Title>
                   <Button  variant="success" onClick={() => setModalShow(true)}>Edit</Button>
                 </Card.Body>
               </Card>
               <ModalEditBook
               show={modalShow}
               onHide={() => setModalShow(false)}
              />

{/* <BookDetail
               show={modalShow2}
               onHide={() => setModalShow2(false)}
              /> */}
          </>
       );
   }
   export default SellBookList;