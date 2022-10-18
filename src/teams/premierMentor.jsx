import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from '@reach/router';
import NavBar from '../shared/menus/navBar';
import CheckoutMentor from './components/checkoutMentor';
import './css/premierMentor.css';
import { ReactComponent as DropDownIcon } from '../assets/icon/snapbrillia_dropdown_icon.svg';
import { useState } from 'react';

export default function PremierMentor() {
  const [isValidCheckout, setValidCheckout] = useState(false);
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="premier-checkout ps-2">
          <div>Checkout</div>
        </Row>
        <Row>
          <CheckoutMentor />
        </Row>
        <Row>
          <Col
            xs={{ span: 4, offset: 8 }}
            md={{ span: 2, offset: 10 }}
            className="pt-5 premier-mentor-wallet"
          >
            <Row className="premier-mentor-font small-text premier-small-text bold">
              Select Wallet
            </Row>
            <Row className="pt-1">
              <select
                className="premier-mentor-font small-text inputbg premier-select-box premier-small-text"
                id="select-wallet"
              >
                <option>Select</option>
              </select>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-end mx-3 premier-bottom-row">
        <Link
          className="premier-mentor-font small-text premier-small-text premier-back-to-summary bold underline px-4"
          to=""
        >
          Back To Summary
        </Link>
        <Link
          className={
            !isValidCheckout
              ? 'btn-primary premier-confirm-btn premier-confirm-disable premier-small-text'
              : 'btn-primary premier-confirm-btn premier-small-text'
          }
          onClick={(e) => {
            if (!isValidCheckout) e.preventDefault();
          }}
          to=""
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}
