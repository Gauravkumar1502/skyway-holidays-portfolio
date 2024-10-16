import { useState } from 'react';
import { Button, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import avatar from '../assets/avatar.avif';

export default function MyNav() {
  const [user, setUser] = useState({
    username: 'First Last',
    email: 'first.last@gmail.com',
    isLogin: true
  });
  const popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close">
      <Popover.Header as="h3">{user.username}</Popover.Header>
      <Popover.Body>
        <p>Email: {user.email}</p>
        <Button variant="outline-primary" onClick={() => setUser({ ...user, isLogin: false })}>Logout</Button>
      </Popover.Body>
    </Popover>
  );
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
          { !user.isLogin && <Nav>
            <Nav.Link href="#login">
              <Button variant="outline-primary">Login</Button>
            </Nav.Link>
            <Nav.Link href="#signup">
              <Button variant="outline-primary">Sign Up</Button>
            </Nav.Link>
          </Nav> }
          {/* if login print this */}
          { user.isLogin && <Navbar.Text>
            <a href="#profile" className='mr-05'> {user.username}</a>
              <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={popoverClickRootClose}>
              <Image src={avatar} roundedCircle width={35} height={35} style={{cursor:'pointer'}}/>
              </OverlayTrigger>
            </Navbar.Text>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}