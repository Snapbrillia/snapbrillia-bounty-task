import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../shared/menus/navBar';
import ViewCartPurchaseInfo from './viewCartPurchaseInfo';
import ViewCartPurchaseIllustration from './viewCartPurchaseIllustration';

export default function ViewCartPurchasePage() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <ViewCartPurchaseInfo />
          </Col>
          <Col xs={12} md={6}>
            <ViewCartPurchaseIllustration />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
