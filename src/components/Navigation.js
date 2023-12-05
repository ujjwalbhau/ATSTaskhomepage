import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Router } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/home">ATS Web dev Ujjwal </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
              <Nav.Link href="/home">Home</Nav.Link>
           
          
            
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Contact Us" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item> */}
              <NavDropdown.Item href="/contact">
                Visit Website
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="contact">
                Mail us
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          
          <Form className="d-flex align-items end">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
             <Nav.Link href="/terms">Terms of Service</Nav.Link> 
            <Nav.Link variant="outline-success">Privacy Policy</Nav.Link>
          </Form></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;