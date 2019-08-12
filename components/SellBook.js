import Link from 'next/link';


const shoppingCartbutton = {
    float: "right",
    height: "50px",
    width: "50px"
  };

function SellBook(){
  return (
    <div>
      
      
      <Link href= "/ShoppingCart" >
        <img
          src= "./static/images/addBook.png  " 
          alt=  "image" 
          style={shoppingCartbutton}
        /> 
      </Link>
    </div>
  );
}

export default SellBook;