import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavBook from "../components/NavBook";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "javascriptBook",
      bookName: "JavaScript and JQuery ",
      price: "5$"
    };
  }

  render() {
    const buttonstyle = {
      width: "100%"
    };
    return (
      <div>
          <NavBook />
          <br></br>
        <h1>Shopping Cart</h1>
        <br />
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Card style={{ width: "5rem" }}>
                  <Card.Img src={"/static/images/" + this.state.img + ".png"} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "7px" }}>
                      {this.state.bookName}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </td>

              <td>{this.state.price}</td>
              <td>
                {" "}
                <Card.Body>
                  <Button variant="secondary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </Card.Body>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Card style={{ width: "5rem" }}>
                  <Card.Img src={"/static/images/" + this.state.img + ".png"} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "7px" }}>
                      {this.state.bookName}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </td>

              <td>{this.state.price}</td>
              <td>
                {" "}
                <Card.Body>
                  <Button variant="secondary">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </Card.Body>
              </td>
            </tr>
          </tbody>
        </Table>
        <Button style={buttonstyle} variant="info">
          Confirm{" "}
        </Button>
      </div>
    );
  }
}

export default ShoppingCart;
