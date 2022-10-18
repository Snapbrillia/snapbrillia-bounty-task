import React from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../../shared/css/typography.css';
import '../../shared/css/buttonStyles.css';
import '../css/checkout.css';
import { useCart } from '../../context/cartContext';
import { GrantImage } from '../../shared/images';
import { fromPairs } from 'lodash';
import { formatPrefix, formatTrailingCurrency } from '../../shared/utils';

export default function Checkout() {
  const { cart, removeItem } = useCart();
  return (
    <>
      <Container>
        <Modal.Header className="small-cart-header-border" closeButton>
          <span className="h1">Checkout</span>
        </Modal.Header>
        <Modal.Body className="scrollable-checkout mx-3">
          {cart.map((cartItem, index) => {
            return (
              <div key={index}>
                <Row>
                  <Col md={7} sm={12} xs={12}>
                    <Row>
                      <Col
                        md={'auto'}
                        xs={'auto'}
                        className="cart-align-left pb-1"
                      >
                        <img
                          src={GrantImage(cartItem.grant)}
                          className="small-cart-img"
                          alt="project-logo"
                        />
                      </Col>
                      <Col md={8} xs={8}>
                        <Row className="cart-font cart-name primary bold cart-align">
                          {cartItem.grant?.name}
                        </Row>
                        <Row className="cart-font small-text cart-small-text underline cart-align">
                          {cartItem.grant?.companyName}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={5} xs={12} className="text-end">
                    <Row>
                      <span className="cart-font small-text cart-small-text cart-small-text cart-align">
                        Payment method:
                      </span>
                    </Row>
                    <Row>
                      <span className="cart-font small-text cart-small-text cart-small-text bold cart-align">
                        {cartItem.payment?.name}
                      </span>
                    </Row>
                  </Col>
                </Row>
                <Row className="row-border pb-2 mb-4 mt-3">
                  <Col className="cart-align">
                    <span
                      className="cart-font small-cart-remove-label bold underline"
                      type="button"
                      onClick={() => {
                        removeItem(cartItem);
                      }}
                    >
                      Remove
                    </span>
                  </Col>
                  <Col className="text-end cart-align">
                    <span className=" cart-font cart-link bold">
                      {formatPrefix(cartItem.grant)}
                      {cartItem.amount} {formatTrailingCurrency(cartItem.grant)}
                    </span>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Modal.Body>
      </Container>
    </>
  );
}
