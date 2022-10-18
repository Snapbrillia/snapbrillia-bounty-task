import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../shared/menus/navBar';
import ThankYou from './components/thankYou';
import CheckoutInfo from './components/checkoutInfo';

export default function SuccessCheckout() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <CheckoutInfo />
          </Col>
          <Col xs={12} md={6}>
            <ThankYou />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
