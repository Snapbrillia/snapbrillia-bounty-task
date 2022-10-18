import { useState } from 'react';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import NavBar from '../../shared/menus/navBar';
import '../css/viewCartInfoPage.css';
import { Link } from '@reach/router';
import '../css/viewCartPage.css';
import { useCart } from '../../context/cartContext';
import { GrantImage } from '../../shared/images';
import { formatPrefix, formatTrailingCurrency } from '../../shared/utils';

export default function ViewCartInfoPage() {
  const {
    cart,
    removeItem,
    updateItem,
    accounts,
    isValidCart,
    saveCart,
    purchase,
  } = useCart();

  const [editInputValue, setEditInputValue] = useState({
    edit: false,
    elemId: null,
  });

  const handleEditClick = (e) => {
    setEditInputValue({
      ...editInputValue,
      edit: !editInputValue.edit,
      elemId: parseInt(e.target.id),
    });
  };

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
                {editInputValue.edit === true &&
                index === editInputValue.elemId ? (
                  <Col xs={12} sm={12} md={{ span: 4, offset: 4 }}>
                    <Row>
                      <Col xs={5} sm={5} md={5}>
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
                            {accounts.length > 0 &&
                              accounts.map((account, idx) => (
                                <option value={account.id} key={`${idx}`}>
                                  {account.name}
                                </option>
                              ))}
                          </select>
                        </Row>
                      </Col>
                      <Col
                        xs={{ span: 5, offset: 2 }}
                        sm={{ span: 5, offset: 2 }}
                        md={{ span: 5, offset: 2 }}
                      >
                        <Row className="cart-font small-text cart-small-text bold">
                          Amount
                        </Row>
                        <Row>
                          <InputGroup className="cart-align cart-select-box">
                            <InputGroup.Text className="cart-font small-text cart-small-text cart-input-text">
                              $
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
                              USD
                            </InputGroup.Text>
                          </InputGroup>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                ) : (
                  <Col
                    xs={12}
                    sm={12}
                    md={{ span: 4, offset: 4 }}
                    className="cart-align"
                  >
                    <span className="d-flex justify-content-end">
                      <div className="cart-font small-text cart-info-text">
                        {'Payment Method: '}
                      </div>
                      <div className="cart-font small-text cart-info-text bold">
                        {cartItem.payment?.name}
                      </div>
                    </span>
                    <span className="d-flex justify-content-end cart-font cart-info-amount">
                      {formatPrefix(cartItem.grant)}
                      {cartItem.amount} {formatTrailingCurrency(cartItem.grant)}
                    </span>
                  </Col>
                )}
              </Row>
              <Row className="row-border mb-4 pb-2">
                <Col
                  className="cart-align cart-font cart-remove-btn bold pt-3"
                  type="button"
                  value="Remove"
                  onClick={() => {
                    removeItem(cartItem);
                  }}
                >
                  Remove
                </Col>
                <Col
                  onClick={handleEditClick}
                  className="cart-font bold cart-align cart-save-edit-btn text-end"
                  id={index}
                  type="button"
                  value={
                    editInputValue.edit === true &&
                    index === editInputValue.elemId
                      ? 'Save'
                      : 'Edit'
                  }
                >
                  {editInputValue.edit === true &&
                  index === editInputValue.elemId
                    ? 'Save'
                    : 'Edit'}
                </Col>
              </Row>
            </div>
          );
        })}
      </Container>
      <div className="d-flex justify-content-end mx-3">
        <Link
          className="cart-font cart-back-to-grants small-text cart-small-text bold underline px-4"
          to="/grants"
        >
          Back To Grants
        </Link>
        <button
          className={
            editInputValue.edit || !isValidCart
              ? 'btn-primary cart-confirm-btn cart-confirm-disable cart-small-text'
              : 'btn-primary cart-confirm-btn cart-small-text'
          }
          onClick={(e) => {
            if (!isValidCart || editInputValue.edit) e.preventDefault();
            purchase(true);
          }}
        >
          Purchase
        </button>
      </div>
    </div>
  );
}
