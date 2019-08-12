import Link from 'next/link';


const shoppingCartbutton = {
    float: "right",
    height: "50px",
    width: "50px"
  };

function ShoppingCarIcon(){
  return (
    <div>
      
      
      <Link href= "/ShoppingCart" >
        <img
          src= "../static/images/ShoppingCart.ico" 
          alt=  "image" 
          style={shoppingCartbutton}
        /> 
      </Link>
    </div>
  );
}

export default ShoppingCarIcon;