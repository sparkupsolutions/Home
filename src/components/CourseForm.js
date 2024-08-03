import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap';
import { Select, InputGroup, InputLeftAddon, Wrap, WrapItem, Card, Container } from '@chakra-ui/react';
import { Box, Text, Heading, Stack, CardBody, CardHeader, StackDivider } from '@chakra-ui/react';

import MenuBar from './MenuBar';
import Footer from './Footer';


const FormDetails = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    experience: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="name">
        <Heading as='h5' size='sm'>Name</Heading>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group><br/>

        <Form.Group controlId="email">
        <Heading as='h5' size='sm'>Email</Heading>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group><br/>

        <Form.Group controlId="mobile">
        <Heading as='h5' size='sm'>Mobile</Heading>
          <InputGroup>
            <InputLeftAddon>+91</InputLeftAddon>
            <Form.Control
              required
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter your mobile number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group><br/>

        <Form.Group controlId="experience">
        <Heading as='h5' size='sm'>Experience</Heading>
          <Form.Check
            required
            type="radio"
            label="Fresher"
            name="experience"
            value="fresher"
            onChange={handleChange}
          />
          <Form.Check
            required
            type="radio"
            label="Experienced"
            name="experience"
            value="experienced"
            onChange={handleChange}
          />
        </Form.Group><br/>

        <Form.Group controlId="course">
        <Heading as='h5' size='sm'>Course</Heading>
          <Select
            placeholder="Select course"
            name="course"
            value={formData.course}
            onChange={(e) => handleChange({ target: { name: 'course', value: e.target.value } })}
          >
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            <option value="course3">Course 3</option>
          </Select>
        </Form.Group>

        <Button variant="primary" type="submit" style={{marginTop:'5%'}}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

const CourseForm = () => {
  return (
    <>
      <MenuBar />

      <Heading size='md' align='center' mt='2'>Registration Form</Heading>

      <Wrap spacing='10%' align='center'>
        <WrapItem w="50%" m="5">
          <FormDetails />
        </WrapItem>
        <WrapItem>
          <Card>
            <CardHeader>
              <Heading size='md'>Client Report</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Summary
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Overview
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    Check out the overview of your clients.
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Analysis
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </WrapItem>
      </Wrap>

      <Footer />
    </>
  )
}

export default CourseForm;
