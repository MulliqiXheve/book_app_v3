//import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddInSearch from "../addInSearch";


function BookToBuyList() {
  return (
    <div >
      <Form>
        <Row>
          <Col>
            <AddInSearch />
          </Col>
          <Col>
            <AddInSearch />
          </Col>
          <Col>
            <AddInSearch />
          </Col>
          <Col>
            <AddInSearch />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default BookToBuyList;