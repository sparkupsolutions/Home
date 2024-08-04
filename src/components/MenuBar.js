import React, { useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

import ContactUs from './Contact_us';

function MenuBar() {
  const [showContactUs, setShowContactUs] = useState(false);
  const handleShow = () => setShowContactUs(true);
  const handleClose = () => setShowContactUs(false);
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href={process.env.REACT_APP_FOR_PATH + "/"} style={{fontFamily:"fangsong", color: "#fff0b5", fontWeight:"bolder"}}>
          SparkUp Solutions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href={process.env.REACT_APP_FOR_PATH + "/"}>Home</Nav.Link>
            <Nav.Link href="#/courses">Courses List</Nav.Link>
            <Nav.Link onClick={handleShow}>Contact Us</Nav.Link>
            <ContactUs show={showContactUs} handleClose={handleClose} />
            {/* <Nav.Link href="/sidebar">About us</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#" disabled>
              Scholarships
            </Nav.Link>
            <Nav.Link href="#" disabled>
              Hackathons
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Courses"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;