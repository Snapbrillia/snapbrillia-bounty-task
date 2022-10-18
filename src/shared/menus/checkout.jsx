import React from 'react';
import { Container, Row, Modal, InputGroup, Form } from 'react-bootstrap';
import '../../shared/css/typography.css';
import '../../shared/css/buttonStyles.css';
import { useCart } from '../../context/cartContext';
import { useAuth } from '../../context/authContext';

export default function Checkout() {
  const { accounts, cashOut, setCashOut } = useCart();
  const { auth } = useAuth();
  return (
    <>
      <Container>
        <Modal.Header className="small-cart-header-border" closeButton>
          <span className="h1">Cart Out</span>
        </Modal.Header>
        <Modal.Body className="scrollable-checkout mx-3">
        <Row>
            Available Balance
          </Row>
          <Row>
            <h3 className="money-text" style={{textAlign: "left"}}>
              $ {parseInt(auth?.user?.wallet || 0).toLocaleString('en-US')}
            </h3>
            <h3 className="crypto-text-num" style={{textAlign: "left"}}>
              {parseInt(auth?.user?.wallet || 0).toLocaleString('en-US')}
              <span className="crypto-text-letter">ADA</span>
            </h3>
          </Row>
          <hr />
          <Row>
            <label className="cart-font small-text cart-small-text bold cart-align">
              Wallet:
            </label>
            <Form.Control
                value={cashOut.payment?.name}
                className="cart-font cart-input-text primary cart-input"
                min="0"
                id={'input'}
                disabled={true}
              />
          </Row>
          <Row>
            <label className="cart-font small-text cart-small-text bold cart-align">
              Amount:
            </label>
            <InputGroup className="cart-align cart-select-box mb-3">
              <InputGroup.Text className="cart-font small-text cart-small-text cart-input-text">
                $
              </InputGroup.Text>
              <Form.Control
                value={auth?.user?.wallet || 0}
                className="cart-font cart-input-text primary cart-input"
                type="number"
                min="0"
                id={'input'}
                disabled={true}
              />
              <InputGroup.Text className="cart-font small-text cart-input-text cart-input-size">
                USD
              </InputGroup.Text>
            </InputGroup>
          </Row>
          <hr />
          <Row className="text-end">
            <div>Total Withdraw:</div>
            <div>$ {parseInt(auth?.user?.wallet || 0).toLocaleString('en-US')} USD</div>
            <div>{cashOut.payment?.name}</div>
          </Row>
        </Modal.Body>
      </Container>
    </>
  );
}
