import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect data-bs-theme="dark" sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Skyway Holidays Pvt Ltd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Hotels" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#hotel-1">Hotel 1</NavDropdown.Item>
              <NavDropdown.Item href="#hotel-2">Hotel 2</NavDropdown.Item>
              <NavDropdown.Item href="#hotel-3">Hotel 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#all-hotels">All Hotels</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#rooms">Rooms</Nav.Link>
            <Nav.Link href="#rooms">About</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
            <Nav.Link href="#reservation">Reservation</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">
              <Button variant="outline-primary">Login</Button>
            </Nav.Link>
            <Nav.Link href="#signup">
              <Button variant="outline-primary">Sign Up</Button>
            </Nav.Link>
          </Nav>
          {/* if login print this */}
          { false && <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;