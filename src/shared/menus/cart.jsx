import React from 'react';
import { Container, Row, Modal } from 'react-bootstrap';
import '../../shared/css/typography.css';
import '../../shared/css/buttonStyles.css';
import { useCart } from '../../context/cartContext';
import { useAuth } from '../../context/authContext';
import { useRef, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import DropDownWallet from './dropDownWallet';

export default function Cart() {
  const { accounts, setCashOut, loadBankInfo, loadCryptoInfo } = useCart();
  const { auth } = useAuth();
  const [showWalletDropDown, setShowWalletDropDown] = useState(false);
  const componentRef = useRef();

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
  });

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
          <span className="h1">Cart Out</span>
        </Modal.Header>
        <Modal.Body className="scrollable-cart mx-3">
          <Row>Available Balance</Row>
          <Row>
            <h3 className="money-text" style={{ textAlign: 'left' }}>
              $ {parseInt(auth?.user?.wallet || 0).toLocaleString('en-US')}
            </h3>
            <h3 className="crypto-text-num" style={{ textAlign: 'left' }}>
              {parseInt(auth?.user?.wallet || 0).toLocaleString('en-US')}
              <span className="crypto-text-letter">ADA</span>
            </h3>
          </Row>
          <hr />
          <Row>
            <label className="cart-font small-text cart-small-text bold cart-align-left">
              Wallet
            </label>
            <select
              onChange={(event) => {
                const payment = accounts.find(
                  (x) => x.id === event.target.value
                );
                setCashOut((e) => ({
                  ...e,
                  payment,
                }));
              }}
              className="cart-font small-text inputbg cart-small-text cart-select-box"
              id={'dropdown'}
              onClick={(e) => {
                e.preventDefault();
                handleNoAccountClick();
              }}
            >
              <option value="">Select</option>
              {accounts.length > 0 &&
                accounts.map((account, idx) => (
                  <option
                    value={account.id ? account.id : account._id}
                    key={`${idx}`}
                  >
                    {account.walletName
                      ? account.walletAddress
                        ? `${account.walletName} ${account.walletAddress.slice(
                            0,
                            4
                          )}...${account.walletAddress.slice(-6)}`
                        : `${
                            account.walletName
                          } ... ${account.pubKeyAddress.slice(-10)}`
                      : `${account.institution_name} (...${account.last4})`}
                  </option>
                ))}
            </select>
          </Row>
          <hr />
        </Modal.Body>
      </Container>
    </>
  );
}
