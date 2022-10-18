import { Container, Row, Col } from 'react-bootstrap';
import '../../shared/css/textColors.css';
import '../css/checkoutInfo.css';
import { Link } from '@reach/router';

export default function CheckoutInfo() {
  return (
    <div>
      <Container fluid className="checkout-info-container mt-5">
            <Row className="px-2 py-5 checkout-info-row">
              <Col>
                <Row>
                  <Col xs={4} md={'auto'} className="grant-list-col-spaceing">
                    <img
                      src="https://via.placeholder.com/500x500.png?text=Placeholder+Image"
                      className="cart-img"
                      alt="company logo"
                    />
                  </Col>
                  <Col xs={8} md={5} className="p-0">
                    <h5 className="primary bold mb-0">grant name</h5>
                    <p className="grey-title medium pointer">grant companyName</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4} className="text-end">
                <Row>
                  <span className="small-text">Payment Method</span>
                </Row>
                <Row>
                  <span className="small-text bold">Bank of America</span>
                </Row>
                <Row>
                  <span className="fs-5 medium">$499.00 USD</span>
                </Row>
              </Col>
            </Row>
        
      </Container>

      <Row className="d-flex justify-content-end">
        <Link
          className="btn-primary cart-confirm-btn cart-small-text mx-5 my-4"
          to="/bounties"
        >
          Back to Bounties
        </Link>
      </Row>
      </div>
  );
}
