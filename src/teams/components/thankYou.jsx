import '../../shared/css/typography.css';
import '../css/thankYou.css';
import Astronaut from '../../assets/illustrations/snapbrillia_astronaut_illustration.png';
import { Container, Row, Col } from 'react-bootstrap';

export default function ThankYou() {
  return (
    <Container className="text-center thankyoupurchase-illustration-container d-flex flex-column thankyou-purchase-success-text">
      <Row>
        <Col className="py-2">
          <h1 className="cart-font primary bold thankyou-text">
            Thank You!
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-muted cart-font thankyou-contribution-text">
            Your Contribution Was Successful.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-end justify-content-center">
          <img src={Astronaut} alt="astronaut" />
        </Col>
      </Row>
    </Container>
  );
}
