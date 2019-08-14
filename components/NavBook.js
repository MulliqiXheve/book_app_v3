//import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBook = () => (

	<div>
		     <Navbar bg="dark" variant="dark">
				<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/SearchBooks">SearchBooks</Nav.Link>
				<Nav.Link href="/Profile">Profile</Nav.Link>
				
				</Nav>
				
			</Navbar>
	</div>
	
);

export default NavBook;