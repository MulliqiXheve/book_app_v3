import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class AddBook extends React.Component {
   
  render() {
    return (
      <div >


<Navbar bg="light" variant="light">
    
    <Form inline>
      <FormControl type="text" placeholder="Add a book" className="mr-sm-4" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  

        
      </div>
    )
  }
}

export default AddBook;