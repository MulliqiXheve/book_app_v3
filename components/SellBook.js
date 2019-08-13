// import Link from 'next/link';
import ModalAddBook from './ModalAddBook';
import Button from 'react-bootstrap/Button';

const shoppingCartbutton = {
    float: "right",
    height: "50px",
    width: "50px"
  };

function SellBook(){
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      
      
      <Button onClick={() => setModalShow(true)} >
        <img
          src= "./static/images/addBook.png  " 
          alt=  "image" 
          style={shoppingCartbutton}
        /> 
      </Button>
      <ModalAddBook
            show={modalShow}
            onHide={() => setModalShow(false)}
           />
    </div>
  );
}

export default SellBook;