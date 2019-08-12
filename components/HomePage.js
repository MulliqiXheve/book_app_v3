import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/style.css'

class HomePage extends React.Component {
  
  render() {
  
    return (
     
      
<Card className="bg-dark text-white">
  <Card.Img src="../static/images/Books1.jpg" alt="image" />
  
  <Card.ImgOverlay>
  <div id="container">
    <Card.Title><h1><i>Welcome!!</i></h1></Card.Title>
  
    <Card.Text>
    <Button variant="secondary">Sign In</Button>
    <br></br>
    <br></br>
    <h4>Not a user? <Link href="/signUp"><a>Sign Up</a></Link></h4>
    </Card.Text>
    </div>
  </Card.ImgOverlay>
  
</Card>



    );
  }
}

export default HomePage;