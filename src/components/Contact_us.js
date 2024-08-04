import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Box, Text, Button } from '@chakra-ui/react';

const ContactUs = ({ show, handleClose }) => {
  const isMobile = window.innerWidth < 1000;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Any questions or need assistance?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScDWfMwfB2yhcSYbLxj-iJd1QxqNicWbHegUfnghsUxwXxEYw/viewform?embedded=true"
          title="Contact us"
          width={isMobile ? "350" : "450"}
          height={isMobile ? "600" : "400"}
        >
          Loading…
        </iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactUs;
