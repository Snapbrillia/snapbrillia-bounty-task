import React from 'react';
import { Link } from '@reach/router';
import { Container, Row, Col} from 'react-bootstrap';
import '../css/checkoutMentor.css';

export default function CheckoutMentor() {
 
  return (
    <Container className="pt-5 checkout-mentor-component">
      <Row>
        <Col xs={12} md={1}>
          <img src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
              height={60}
              width={60} className="checkout-mentor-image"/>
        </Col>
        <Col xs={12} md={10}>
          <Row className="checkout-mentor-name"><div>Paul Scalin</div></Row>
          <Row className="checkout-mentor-description"><div>Premier Mentor</div></Row>
          <Row className="checkout-mentor-detail">
            <div>Bounty: <span className="fw-bold">Improve Tooltip And Clickable Links</span></div>
          </Row>
        </Col>
        <Col xs={12} md={1} className="">
          <Row className="checkout-mentor-us justify-content-end"><div>$497.75</div></Row>
          <Row className="checkout-mentor-ada"><div>960.47ADA</div></Row>
        </Col> 
      </Row>
      <Row className="row-border pt-4"></Row>
    </Container>
  );
}
