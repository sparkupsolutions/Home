import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Box, Text, Button } from '@chakra-ui/react';

const FooterForm = () => {
  const width = window.innerWidth < 1000 ? false : true
  if (width) {
    return (<DestopView />)
  }
  return (<MobileView />)
};

// const DestopView = () => {
//   return (
//     <Box bg="black" py="4" px="8" position="fixed" bottom="0" left="0" right="0">
//       <Text fontSize='sm' color='whitesmoke'>
//       Have any questions or need assistance? We'd love to hear from you! Please fill out the form below, and one of our representatives will get in touch with you shortly.
//       </Text>
//       <Stack spacing={4} direction='row'>
//         <InputGroup>
//           <Input placeholder='Full Name' color='whitesmoke' />
//         </InputGroup>
//         <InputGroup>
//           <InputLeftAddon>+91</InputLeftAddon>
//           <Input type='tel' placeholder='Mobile Number' color='whitesmoke' />
//         </InputGroup>

//         <InputGroup>
//           <Input placeholder='Email' type='email' color='whitesmoke'/>
//         </InputGroup>

//         <Button colorScheme="blue" width="100%">
//           Send
//         </Button>
//       </Stack>
//     </Box>
//   );
// }

const DestopView = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Box bg="black" py="4" px="8" position="fixed" bottom="0" left="0" right="0">
      <Text fontSize='sm' color='whitesmoke'>
        Have any questions or need assistance? We'd love to hear from you! Please fill out the form below, and one of our representatives will get in touch with you shortly.
      </Text>
      <Button colorScheme="blue" width="100%" onClick={handleShow}>
        Click to fill out the form !
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill out this form.</Modal.Title><br/>
        </Modal.Header>
        <Modal.Body>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdxcguO9CxcS8Fem7zYR4N5YX-sCxxAiaDhxiTE6S6W8XtSwg/viewform?embedded=true"
            title="Python Course Registration Form" width="450" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Send
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Box>
  );
}

const MobileView = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Box bg="black" py="2" px="2" position="fixed" bottom="0" left="0" right="0">
      <Text fontSize='sm' color='whitesmoke'>
        Any questions or need assistance? 
      </Text>
      <Button colorScheme="blue" width="100%" onClick={handleShow}>
        Click to fill out the form !
      </Button>
      {/* <Button variant="primary" fontSize='sm' color='white' onClick={handleShow}>
      Any questions or need assistance? Click to fill out the form
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please fill out this form.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Stack spacing={4} direction='column'>
            <InputGroup>
              <Input placeholder='Full Name' color='whitesmoke' />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon>+91</InputLeftAddon>
              <Input type='tel' placeholder='Mobile Number' color='whitesmoke' />
            </InputGroup>

            <InputGroup>
              <Input placeholder='Email' type='email' color='whitesmoke'/>
            </InputGroup>
          </Stack> */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdxcguO9CxcS8Fem7zYR4N5YX-sCxxAiaDhxiTE6S6W8XtSwg/viewform?embedded=true"
            title="Python Course Registration Form" width="350" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Send
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Box>
  );
}
export default FooterForm;
