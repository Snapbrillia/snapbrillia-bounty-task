import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
// import { Link } from '@reach/router';
import '../../shared/css/typography.css';
import '../../shared/css/buttonStyles.css';
import Cart from './cart';
import Checkout from './checkout';
import Success from './success';
import { useCart } from '../../context/cartContext';
// import { createPayout } from '../../api/session';
import { useAuth } from '../../context/authContext';

export default function CartModal({ setShowModal }) {
  const showModal = true;
  const { cashOut } = useCart();
  const [payout, setPayout] = useState({});
  const [page, setPage] = useState(1);
  const { auth } = useAuth();

  const isValidCart = true;

  const handleClose = () => {
    setShowModal(false);
    setPage(1);
  };

  function setPurchasePage2() {
    setPage(2);
  }

  async function setPurchasePage3() {
    try {
      // const data = await createPayout(auth.user.wallet, cashOut.payment);
      // setPayout(data);
      setPage(3);
    } catch (error) {
      // toast(error.message);
    }
  }

  return (
    <div style={{ position: 'absolute' }}>
      <Modal
        onHide={handleClose}
        backdrop="static"
        show={showModal}
        centered
        contentClassName="small-cart-modal-radius"
        size="lg"
        dialogClassName="small-cart-bg"
      >
        {page === 2 ? (
          <Checkout />
        ) : page === 3 ? (
          <Success id={payout._id} />
        ) : (
          <Cart />
        )}
        {page === 2 ? (
          <Container>
            <Row className="small-cart-footer-bg p-4">
              <Col></Col>
              <Col className="text-end">
                <button
                  className="btn-primary cart-confirm-btn cart-small-text"
                  onClick={() => setPurchasePage3()}
                >
                  Purchase
                </button>
              </Col>
            </Row>
          </Container>
        ) : page === 1 ? (
          <Container>
            <Row className="small-cart-footer-bg p-4">
              <Col></Col>
              <Col className="text-end">
                <button
                  className={
                    !isValidCart
                      ? 'btn-primary cart-confirm-btn small-cart-confirm-disable cart-small-text'
                      : 'btn-primary cart-confirm-btn cart-small-text'
                  }
                  disabled={!isValidCart}
                  onClick={() => setPurchasePage2()}
                >
                  Confirm
                </button>
              </Col>
            </Row>
          </Container>
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
}
