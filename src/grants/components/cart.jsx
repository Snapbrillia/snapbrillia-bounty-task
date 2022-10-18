import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Modal,
  Form,
  InputGroup,
  Dropdown,
} from 'react-bootstrap';
import '../../shared/css/typography.css';
import '../../shared/css/buttonStyles.css';
import '../css/cart.css';
import { useCart } from '../../context/cartContext';
import { GrantImage } from '../../shared/images';
import DropDownWallet from '../../shared/menus/dropDownWallet';

export default function Cart() {
  const {
    cart,
    removeItem,
    updateItem,
    accounts,
    loadBankInfo,
    loadCryptoInfo,
    cryptoAccounts,
  } = useCart();
  const componentRef = useRef();
  const [showWalletDropDown, setShowWalletDropDown] = useState(false);

  const handleOutsideClick = (componentRef, e) => {
    if (e.target.classList.contains('wallet-menu')) {
      return;
    }
    return componentRef.current && !componentRef.current.contains(e.target)
      ? setShowWalletDropDown(false)
      : null;
  };

  useEffect(() => {
    document.addEventListener('mousedown', (e) =>
      handleOutsideClick(componentRef, e)
    );
    return () => document.removeEventListener('mouse', handleOutsideClick);
  }, []);

  const handleNoAccountClick = async () => {
    try {
      const bankAccounts = await loadBankInfo();
      const cryptoAccounts = await loadCryptoInfo();

      if (bankAccounts?.length > 0 || cryptoAccounts?.length > 0) {
        return;
      } else {
        setShowWalletDropDown(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatPrefix = (payment) => {
    let formatted;
    if (payment?.type === 'bank') {
      formatted = `$`;
    } else {
      formatted = ``;
    }
    return formatted;
  };

  const formatTrailingCurrency = (payment) => {
    let formatted;
    if (payment?.type === 'bank') {
      formatted = `USD`;
    } else {
      formatted = `₳DA`;
    }
    return formatted;
  };

  return (
    <>
      <Container fluid>
        <div
          ref={componentRef}
          style={{ display: `${showWalletDropDown ? '' : 'none'}` }}
          onClick={() => {
            setShowWalletDropDown(false);
          }}
        >
          <Dropdown show={showWalletDropDown}>
            <DropDownWallet className="wallet-menu" />
          </Dropdown>
        </div>
        <Modal.Header className="small-cart-header-border" closeButton>
          <span className="h1">Cart</span>
        </Modal.Header>
        <Modal.Body className="scrollable-cart mx-3">
          {cart.map((e, index) => {
            return (
              <div key={index}>
                <Row className="row-border mb-4">
                  <Col md={7} sm={12} xs={12}>
                    <Row>
                      <Col
                        md={'auto'}
                        xs={'auto'}
                        className="cart-align-left pb-1"
                      >
                        <img
                          src={GrantImage(e.grant)}
                          className="small-cart-img"
                          alt="project-logo"
                        />
                      </Col>
                      <Col md={8} xs={8}>
                        <Row className="cart-font cart-name primary bold cart-align">
                          {e.grant?.name}
                        </Row>
                        <Row className="cart-font small-text cart-small-text underline cart-align">
                          {e.grant?.companyName}
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={5} xs={9}>
                    <Row className="cart-align">
                      <label className="cart-font small-text cart-small-text bold cart-align-left">
                        Payment Method
                      </label>
                    </Row>
                    <Row>
                      <select
                        onChange={(event) => {
                          updateItem(e, {
                            payment: accounts.find(
                              (x) => x.id === event.target.value
                            ),
                          });
                        }}
                        className="cart-font small-text inputbg cart-small-text cart-select-box"
                        id={'dropdown'}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNoAccountClick();
                        }}
                        defaultValue={e.payment?.id}
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
                  <Col className="remove-align mb-3 cart-align" md={7} xs={3}>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        removeItem(e);
                      }}
                      className="cart-font small-cart-remove-label bold underline"
                    >
                      Remove
                    </span>
                  </Col>
                  <Col md={5} xs={9}>
                    <Row>
                      <label className="cart-font small-text cart-small-text bold cart-align">
                        Amount
                      </label>
                    </Row>
                    <Row>
                      <InputGroup className="cart-align cart-select-box mb-3">
                        <InputGroup.Text className="cart-font small-text cart-small-text cart-input-text">
                          {formatPrefix(e.payment)}
                        </InputGroup.Text>
                        <Form.Control
                          onChange={(event) => {
                            updateItem(e, {
                              amount: event.target.value,
                            });
                          }}
                          value={e.amount}
                          className="cart-font cart-input-text primary cart-input"
                          type="number"
                          min="0"
                          id={'input'}
                        />
                        <InputGroup.Text className="cart-font small-text cart-input-text cart-input-size">
                          {formatTrailingCurrency(e.payment)}
                        </InputGroup.Text>
                      </InputGroup>
                    </Row>
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
