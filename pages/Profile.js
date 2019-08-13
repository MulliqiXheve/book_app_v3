import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBook from "../components/NavBook";
import SellBookList from "../components/SellBooksList";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import SellBook from "../components/SellBook";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jon Doe",
      greeting: "Welcome back, ",
      email: "someone@example.com",

      someInitialValue: this.props.initialValue
    };
  }

  render() {
    const addBookbutton = {
      margin: "35px",
      border: "5px solid gray",
      width: "90%"
    };

    return (
      <div>
        <NavBook />
        <Container>
          <Row>
            <Col>
              <div>
                <Card style={addBookbutton}>
                  <div className="text-center">
                    <Card.Text style={{ float: "left" }}>
                      {this.state.greeting}
                      {this.state.name}{" "}
                    </Card.Text>
                    <div>
                      <Image
                        variant="top"
                        src="http://www.trinityenergy.co.in/assets/images/user_default.png"
                        roundedCircle
                      />
                      <Card.Body>
                        <Card.Text id="name">
                          <strong>{this.state.name}</strong>{" "}
                        </Card.Text>
                        <Card.Text>{this.state.email}</Card.Text>
                        <Button variant="info">Edit</Button>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col>
              <div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th />
                      <th />
                      <th>
                        <SellBook />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <SellBookList />
                      </td>
                      <td>
                      <SellBookList />
                      </td>
                      <td>
                      <SellBookList />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <SellBookList />
                      </td>
                      <td>
                      <SellBookList />
                      </td>
                      <td>
                      <SellBookList />
                      </td>
                    </tr>
                    <tr>
                      <td>place holder</td>
                      <td>place holder </td>
                      <td>place holder</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
