// TechnologyCarousel.js
import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

const logos = [
  { src: "/Technology/Python.png", alt: 'Python Logo' },
  { src:  "/Technology/django.png", alt: 'Django Logo' },
  { src:  "/Technology/flask.png", alt: 'Flask Logo' },
  { src:  "/Technology/FastAPI.png", alt: 'FastAPi Logo' },
  { src:  "/Technology/Pandas.png", alt: 'Pandas Logo' },
  { src:  "/Technology/Numpy.png", alt: 'Numpy Logo' },
  { src:  "/Technology/Machine-Learning.png", alt: 'Machine Learning Logo' },
  { src:  "/Technology/Rest-api.png", alt: 'Rest APi Logo' },
  { src: "/Technology/git.png", alt: 'Git Logo' },
  { src:  "/Technology/jenkins.png", alt: 'Jenkins Logo' },
  { src:  "/Technology/Kubernetes.png", alt: 'Kubernetes Logo' },
  { src:  "/Technology/CICD.png", alt: 'CI/CD Logo' },
  { src:  "/Technology/docker.png", alt: 'Docker Logo' },
  { src: "/Technology/aws.png", alt: 'AWS services Logo' },
  { src:  "/Technology/sql.png", alt: 'SQL Logo' },
  { src:  "/Technology/nosql.png", alt: 'NoSql Logo' },
  { src:  "/Technology/etl.png", alt: 'ET: Logo' },
  { src:  "/Technology/react.png", alt: 'React Logo' },
  { src:  "/Technology/node.png", alt: 'Node Logo' },
  { src:  "/Technology/mern.png", alt: 'Mern Logo' }
  
];

const TechnologyCarousel = () => {
  // Split logos into chunks of 5
  const chunkedLogos = [];
  const w = window.innerWidth < 1000 ? 1 : 5
  for (let i = 0; i < logos.length; i += w) {
    chunkedLogos.push(logos.slice(i, i + w));
  }

  return (
    <Carousel style={{height:'6rem', marginTop:"3rem"}}>
      {chunkedLogos.map((chunk, index) => (
        <Carousel.Item key={index}>
          <Row className="justify-content-center">
            {chunk.map((logo, idx) => (
              <Col key={idx} md={2} className="d-flex justify-content-center">
                <img
                  className="d-block logo-image"
                  src={logo.src}
                  alt={logo.alt}
                  width="100"
                  height="50%"
                />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TechnologyCarousel;
