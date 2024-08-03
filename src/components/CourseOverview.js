import React, { useEffect }  from 'react';
import { Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import { Stepper, Step, StepIndicator, StepStatus, StepNumber, 
  StepTitle, StepDescription, StepSeparator, StepIcon } from '@chakra-ui/react';
import { Card, Accordion } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import MenuBar from './MenuBar';
import Footer from './Footer';
import FooterForm from './FixedFooterForm';

import { loadJsonFiles } from '../utils/loadJsonFiles';

import '../App.css';

const CourseOverview = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const jsonData = loadJsonFiles();
  const location = useLocation();
  const { index } = location.state.indexs || 0;
  console.log("index", index)
  const modules = jsonData[index].learning_outcomes
  const title = jsonData[index].title
  const description = jsonData[index].description
  const course_structure = jsonData[index].course_structure.modules
  // const modules1 = [
  //   {
  //     title: "Basic Concepts",
  //     content: "Learn the basics of Python programming including syntax, variables, and data types."
  //   },
  //   {
  //     title: "Intermediate Concepts",
  //     content: "Dive into more complex topics such as functions, modules, and error handling."
  //   },
  //   {
  //     title: "Advanced Concepts",
  //     content: "Explore advanced Python topics including decorators, generators, and concurrency."
  //   },
  //   {
  //     title: "Web Development with Django",
  //     content: "Build web applications using the Django framework."
  //   },
  //   {
  //     title: "Data Science with Python",
  //     content: "Analyze and visualize data using libraries like Pandas and Matplotlib."
  //   }
  // ];

  return (
    <Box>
      <MenuBar />

      <Box p={5}>
        <Heading as="h3" size="lg" align="center" mb={5} color='#4d77b5'>
          {title}
        </Heading>
        <Box>
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colSpan={{ base: 12, md: 3 }}>
              <Heading as='h4' size='md' mb='4' color='#4d77b5'>Steps</Heading>
              <Stepper orientation="vertical" height="80%">
                {course_structure.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>
                    <Box flexShrink='0'>
                    <StepTitle width="20rem">{step.title}</StepTitle>
                    {step.topics.map((topic, index) => (
                        <StepDescription width="20rem"> # {topic}</StepDescription>
                    ))}
                  </Box>
                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 5 }}>
              {modules.map((module, index) => (
                <Card key={index} mb={4}>
                  <Card.Body>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{module.title}</Accordion.Header>
                        <Accordion.Body>
                          <Text>{module.content}</Text>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Body>
                </Card>
              ))}
            </GridItem>

            <GridItem colSpan={{ base: 12, md: 4 }}>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='md'
                boxShadow='dark-lg'
                rounded='md'
                bg='white'
                mb='25%'
                mt='10%'
              >
                <Heading fontSize='xl' pt='3' align='center'>Course Description:</Heading>
                <Text p='4' >
                 {description}
                </Text>
              </Box>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='md'
                boxShadow='dark-lg'
                rounded='md'
                bg='white'
                mb='25%'
              >
                <Heading fontSize='xl' pt='3' align='center'>Why should you join us</Heading>
                <Text p='4'>
                At SparkUp Solutions, we provide hands-on experience in every course. 
                Our faculty members are not just teachers; they are experienced programmers 
                currently working in prestigious IT firms. 
                We don't just teach you; we prepare you to be industry-ready.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Footer />
      <FooterForm />
    </Box>
  );
};


export default CourseOverview;
