// TechnologyCarousel.js
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Box, Wrap } from '@chakra-ui/react';
import CardCourses from './Card';
import logo from '../logo.svg';


const logos = [
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  { src: {logo}, alt: 'Course Logo', title:"Card Title", description:"Some quick example text to build on the card title and make up the bulk of the card's content." }
];

const CourseCarousel = () => {
  // Split logos into chunks of 5
  const chunkedLogos = [];
  const w = window.innerWidth < 1000 ? 1 : 5
  for (let i = 0; i < logos.length; i += w) {
    chunkedLogos.push(logos.slice(i, i + w));
  }

  return (
    <Carousel>
      {chunkedLogos.map((chunk, index) => (
        <Carousel.Item key={index}>
          <Row className="justify-content-center">
            {chunk.map((logo, idx) => (
                <Col key={idx} md={2} className="d-flex justify-content-center">
                    <CardCourses/>
                </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CourseCarousel;
