import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../../shared/css/typography.css';
import finishedcart from '../../assets/illustrations/snapbrillia_astronaut_illustration.png';
import * as orderCandidateAPI from '../../api/order';
import { toast } from 'react-toastify';

export default function Success({ id }) {
  const [order, setOrders] = useState({
    payment: {},
  });

  const getPayoutDetail = async () => {
    try {
      const data = await orderCandidateAPI.getPayout(id);
      setOrders(data);
    } catch (err) {
      toast(err.message);
    }
  };

  useEffect(() => {
    getPayoutDetail();
  }, []);

  return (
    <Container>
      <Modal.Header className="small-cart-header-border" closeButton>
        <span className="h1">Success!</span>
      </Modal.Header>
      <Modal.Body>
        <Row className="checkout scrollable-success mx-2">
          <Col>
            Transaction Reciept
            <hr />
            Wallet 
            <Row>
              <span className="cart-font small-text cart-small-text cart-small-text bold">
                {order.payment?.name}
              </span>
            </Row>
            <Row>
              <span className="cart-font cart-link">
                $ {order.totalAmount} USD
              </span>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="h1 image-center">Thank You!</Col>
        </Row>
        <Row>
          <Col className="image-center">
            <span className="contribution">
              Your Transfer Was Successful
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
