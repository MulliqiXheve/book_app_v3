import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import BookDetail from './BookDetail'
import Link from 'next/link';
import ShopingCart from "../pages/ShoppingCart"


function AddInSearch (){
  const [modalShowin, setModalShowin] = React.useState(false);

    function MouseOver() {
  document.getElementById("demo").textContent= "Click to se details";
}
   
  
    return(
       
          <div>
              <Card style={{ width: '12rem' }}>

              <Link >
        <Card.Img id="demo" 
          src= "static/images/javascriptBook.png"
          alt=  "image" 
          onClick={() => setModalShowin(true)}
          onMouseover="MouseOver()"
        /> 
      </Link>
              
             {/* <Card.Img  onClick={() => setModalShowin(true)} src={"static/images/javascriptBook.png"}  />  */}
             <Card.Body>
               <Card.Title>Java Script 5$</Card.Title>
               
               <Button variant="success" onClick="./ShopingCart">ADD</Button>
             
               
             </Card.Body>  
            
           </Card>
           <BookDetail show={modalShowin}
        onHide={() => setModalShowin(false)}/>
         
          </div>
    );
    }

export default AddInSearch;




