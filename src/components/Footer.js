// Footer.js
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ContactUs from './Contact_us';

const Footer = () => {
  const [showContactUs, setShowContactUs] = useState(false);
  const handleShow = () => setShowContactUs(true);
  const handleClose = () => setShowContactUs(false);
  return (
    <footer className="footer mt-auto py-3 pb-5 bg-dark text-light">
      <Container>
        <Row>
          <Col md={8}>
            <h5>About Us</h5>
            <p>
            SparkUp Solutions ignites your coding fire. We transform you from novice to pro with 
            real-world projects and industry veterans as mentors. Join us and unleash your potential 
            to illuminate the tech industry.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
            <Button variant="outline-light" onClick={handleShow}>support@sparkupsolutions</Button>
            <ContactUs show={showContactUs} handleClose={handleClose} />
            {/* <a href="mailto:support@sparkupsolutions.in">Email: support@sparkupsolutions.in</a> */}
              {/* <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Main St, City, Country</li> */}
            </ul>
          </Col>
          {/* <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-light">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-light">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-light">Instagram</a></li>
            </ul>
          </Col> */}
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} SparkUp Solutions. All rights reserved.</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>Thank you for your visit</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
