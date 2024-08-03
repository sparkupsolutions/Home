// FeedbackCarousel.js
import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';

const FeedbackCarousel = ({ feedbacks }) => {
  // Split feedbacks into chunks of 3
  const chunkedFeedbacks = [];
  for (let i = 0; i < feedbacks.length; i += 3) {
    chunkedFeedbacks.push(feedbacks.slice(i, i + 3));
  }

  return (
    <Carousel>
      {chunkedFeedbacks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <Row className="justify-content-center">
            {chunk.map((feedback, idx) => (
              <Col key={idx} md={4}>
                <Card className="text-center mb-4" style={{height:"80%"}}>
                  <Card.Body>
                    <Card.Text>{feedback.text}</Card.Text>
                    <Card.Title>{feedback.user}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FeedbackCarousel;
