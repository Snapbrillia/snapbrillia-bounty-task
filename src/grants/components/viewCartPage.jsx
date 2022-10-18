import React from 'react';
import { Link } from '@reach/router';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import NavBar from '../../shared/menus/navBar';
import '../css/viewCartPage.css';
import { useCart } from '../../context/cartContext';
import { GrantImage } from '../../shared/images';
import { formatPrefix, formatTrailingCurrency } from '../../shared/utils';
export default function ViewCartPage() {
  const {
    cart,
    removeItem,
    updateItem,
    accounts,
    isValidCart,
    saveCart,
    cryptoAccounts,
  } = useCart();

  return (
    <div>
      <NavBar />
      <h1 className="h1 m-4">Cart</h1>
      <Container fluid className="cart-bg px-5">
        {cart.map((cartItem, index) => {
          return (
            <div key={index}>
              <Row>
                <Col xs={12} sm={12} md={4}>
                  <Row>
                    <Col
                      xs={'auto'}
                      sm={'auto'}
                      md={'auto'}
                      className="cart-align-left pb-2"
                    >
                      <img
                        className="cart-img"
                        src={GrantImage(cartItem.grant)}
                        alt="..."
                      />
                    </Col>
                    <Col xs={8} sm={8} md={8}>
                      <Row className="cart-font cart-name primary bold">
                        {cartItem.grant?.name}
                      </Row>
                      <Row className="cart-font small-text cart-small-text">
                        {cartItem.grant?.companyName}
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={12} md={{ span: 4, offset: 4 }}>
                  <Row>
                    <Col xs={12} sm={5} md={5}>
                      <Row className="cart-font small-text cart-small-text bold">
                        Select Wallet
                      </Row>
                      <Row>
                        <select
                          onChange={(event) => {
                            updateItem(cartItem, {
                              payment: accounts.find(
                                (x) => x.id === event.target.value
                              ),
                            });
                          }}
                          className="cart-font small-text inputbg cart-select-box cart-small-text"
                          id="select-wallet"
                          defaultValue={cartItem.payment?.id}
                        >
                          <option value="">Select</option>
                          {cryptoAccounts.length > 0 &&
                            cryptoAccounts.map((account, idx) => (
                              <option value={account._id} key={`${idx}`}>
                                {account.walletAddress
                                  ? `${
                                      account.walletName
                                    } ${account.walletAddress.slice(
                                      0,
                                      4
                                    )}...${account.walletAddress.slice(-6)}`
                                  : `${
                                      account.walletName
                                    } ... ${account.pubKeyAddress.slice(-10)}`}
                              </option>
                            ))}
                        </select>
                      </Row>
                    </Col>
                    <Col
                      xs={12}
                      sm={{ span: 5, offset: 2 }}
                      md={{ span: 5, offset: 2 }}
                    >
                      <Row className="cart-font small-text cart-small-text bold">
                        Amount
                      </Row>
                      <Row>
                        <InputGroup className="cart-align cart-select-box">
                          <InputGroup.Text className="cart-font small-text cart-small-text cart-input-text">
                            {formatPrefix(cartItem.grant)}
                          </InputGroup.Text>
                          <Form.Control
                            onChange={(event) => {
                              updateItem(cartItem, {
                                amount: event.target.value,
                              });
                            }}
                            className="cart-font cart-select-box cart-input-text primary cart-input"
                            id="amount"
                            type="number"
                            min="0"
                            value={cartItem.amount}
                          />
                          <InputGroup.Text className="cart-font small-text cart-input-text cart-input-size">
                            {formatTrailingCurrency(cartItem.grant)}
                          </InputGroup.Text>
                        </InputGroup>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="row-border mb-4 pb-2">
                <Col
                  md={'auto'}
                  className="cart-align cart-font cart-remove-btn bold pt-3"
                  type="button"
                  value="Remove"
                  onClick={() => {
                    removeItem(cartItem);
                  }}
                >
                  Remove
                </Col>
              </Row>
            </div>
          );
        })}
        <div className="d-flex justify-content-end">
          <Link
            className="cart-font cart-link ui-text-black underline pb-2"
            to="/grants"
          >
            add more grants
          </Link>
        </div>
      </Container>
      <div className="d-flex justify-content-end mx-3">
        <Link
          className="cart-font cart-back-to-grants small-text cart-small-text bold underline px-4"
          to="/grants"
        >
          Back To Grants
        </Link>
        <Link
          className={
            !isValidCart
              ? 'btn-primary cart-confirm-btn cart-confirm-disable cart-small-text'
              : 'btn-primary cart-confirm-btn cart-small-text'
          }
          onClick={(e) => {
            if (!isValidCart) e.preventDefault();
            saveCart();
          }}
          to="/view-cart-info-page"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}
