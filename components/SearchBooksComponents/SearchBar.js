//import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



function SearchBar() {
  return (
    <div style={{ content: "center" }}>
      <h1>Search Books</h1>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Search your favorite Book"
              />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="Search">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchBar;