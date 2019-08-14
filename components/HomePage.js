import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


function HomePage () {
  const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
      <Card className="bg-dark text-white">
        <Card.Img src="../static/images/Books1.jpg" alt="image" />

        <Card.ImgOverlay>
          <div id="container">
            <Card.Title>
              <h1>
                <i>Welcome!!</i>
              </h1>
            </Card.Title>

            <Card.Text>
              <Button variant="secondary" onClick={() => setModalShow(true)}>Sign In</Button>
              
              <br />
              <br />
              
              <h4>
                Not a user?{" "}
                <Button variant="secondary" onClick={() => setModalShow(true)}>Sign Up</Button>
            
              </h4>
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>

      <SignIn show={modalShow}
        onHide={() => setModalShow(false)}/>

<SignUp show={modalShow}
        onHide={() => setModalShow(false)}/>
      </>
    );
  }


export default HomePage;
