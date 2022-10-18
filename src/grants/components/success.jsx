import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../../shared/css/typography.css';
import '../css/success.css';
import finishedcart from '../../assets/illustrations/snapbrillia_astronaut_illustration.png';
import * as orderCandidateAPI from '../../api/order';
import { toast } from 'react-toastify';
import { GrantImage } from '../../shared/images';
import { formatPrefix, formatTrailingCurrency } from '../../shared/utils';

export default function Success({ id }) {
  const [order, setOrders] = useState({
    items: [],
  });

  const getOrderDetail = async () => {
    try {
      const data = await orderCandidateAPI.getOrder(id);
      console.log(data);
      setOrders(data);
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    getOrderDetail();
  }, []);

  return (
    <Container>
      <Modal.Header className="small-cart-header-border" closeButton>
        <span className="h1">Success!</span>
      </Modal.Header>
      <Modal.Body>
        <Row className="checkout scrollable-success mx-2">
          <Col>
            {order.items.map((cartItem, index) => {
              return (
                <div key={index} className="small-cart-purchase-success-row">
                  <Row className="mt-4">
                    <Col>
                      <Row className="mb-4">
                        <Col md={8} sm={12} xs={12}>
                          <Row>
                            <Col md={'auto'} xs={'auto'}>
                              <img
                                src={GrantImage(cartItem.grant)}
                                className="small-cart-img"
                                alt="project-logo"
                              />
                            </Col>
                            <Col md={8} xs={7}>
                              <Row>
                                <span className="cart-font cart-name primary bold">
                                  {cartItem.grant?.name}
                                </span>
                              </Row>
                              <Row>
                                <span className="cart-font small-text cart-small-text">
                                  {cartItem.grant?.companyName}
                                </span>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={4} xs={12} className="text-end">
                          <Row>
                            <span className="cart-font small-text cart-small-text cart-small-text">
                              Payment method
                            </span>
                          </Row>
                          <Row>
                            <span className="cart-font small-text cart-small-text cart-small-text bold">
                              {cartItem.payment?.name}
                            </span>
                          </Row>
                          <Row>
                            <span className="cart-font cart-link">
                              {formatPrefix(cartItem.grant)}
                              {cartItem.amount} {''}
                              {formatTrailingCurrency(cartItem.grant)}
                            </span>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="h1 image-center">Thank You!</Col>
        </Row>
        <Row>
          <Col className="image-center">
            <span className="contribution">
              Your Contribution Was Successful
            </span>
          </Col>
        </Row>
      </Modal.Body>
      <Row>
        <Col className="image-center">
          <img src={finishedcart} alt="astronaut" className="img-dim" />
        </Col>
      </Row>
    </Container>
  );
}
