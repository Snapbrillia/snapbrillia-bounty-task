import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Link } from '@reach/router';
import '../../shared/css/typography.css';
import '../../shared/css/buttonStyles.css';
import Cart from './cart';
import Checkout from './checkout';
import Success from './success';
import '../css/cartModal.css';
import { useCart } from '../../context/cartContext';
import { donateProjectCardano } from '../../shared/utils';

export default function CartModal({ getAllGrants }) {
  const {
    setCartModal,
    isValidCart,
    saveCart,
    orderId,
    cart,
    purchase,
    clearCartItems,
  } = useCart();

  const [stripeOrderId, setStripeOrderId] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setCartModal(false);
    setPage(1);
  };

  const setPurchasePage2 = () => {
    setPage(2);
    saveCart();
  };

  const setPurchasePage3 = async () => {
    // const successOrderId = await purchase();
    // setStripeOrderId(successOrderId);
    await getAllGrants();
    clearCartItems();
    setPage(3);
  };

  const confirmPayment = async () => {
    try {
      setLoading(true);
      if (process.env.NODE_ENV === 'development') {
        await donateProjectCardano(cart, setPurchasePage3);
      } else {
        setPurchasePage3();
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Success id={orderId} />
        ) : (
          <Cart />
        )}
        {page === 2 ? (
          <Container>
            <Row className="small-cart-footer-bg p-4">
              <Col>
                <Link
                  to="/view-cart-page"
                  style={{ color: 'inherit' }}
                  className="view-cart bold underline"
                  onClick={() => {
                    setCartModal(false);
                  }}
                >
                  View Cart
                </Link>
              </Col>
              <Col className="text-end">
                {loading ? (
                  'loading...'
                ) : (
                  <button
                    className="btn-primary cart-confirm-btn cart-small-text"
                    onClick={() => confirmPayment()}
                  >
                    Purchase
                  </button>
                )}
              </Col>
            </Row>
          </Container>
        ) : page === 1 ? (
          <Container>
            <Row className="small-cart-footer-bg p-4">
              <Col>
                <Link
                  to="/view-cart-page"
                  style={{ color: 'inherit' }}
                  onClick={() => {
                    setCartModal(false);
                  }}
                  className="view-cart bold underline"
                >
                  View Cart
                </Link>
              </Col>
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
