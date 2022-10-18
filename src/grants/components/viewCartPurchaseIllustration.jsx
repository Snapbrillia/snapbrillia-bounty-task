import '../../shared/css/typography.css';
import '../css/viewCartPurchaseIllustration.css';
import Astronaut from '../../assets/illustrations/snapbrillia_astronaut_illustration.png';
import { Container, Row, Col } from 'react-bootstrap';

export default function ViewCartPurchaseIllustration() {
  return (
    <Container className="text-center view-cart-purchase-illustration-container d-flex flex-column cart-purchase-success-text">
      <Row>
        <Col className="py-2">
          <h1 className="cart-font primary bold cart-thankyou-text">
            Thank You!
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-muted cart-font cart-contribution-text">
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
