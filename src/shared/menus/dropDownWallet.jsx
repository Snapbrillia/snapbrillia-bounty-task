import '../css/typography.css';
import './css/dropDownWallet.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeModal from './stripeModal';
import { Button } from 'react-bootstrap';
import CartModal from './cartModal';
import Nami from '../../assets/icon/nami.png';
import Eternl from '../../assets/icon/eternl.png';
import Yoroi from '../../assets/icon/yoroi.png';
import Flint from '../../assets/icon/flint.jpg';
import { listCryptoAccounts } from '../../api/session';
import Bank from '../../assets/icon/snapbrillia_wallet_bank_icon.svg';
import CryptoWallet from '../../assets/icon/snapbrillia_crypto_wallet_icon_new.svg';
import { useCart } from '../../context/cartContext';
import { useAuth } from '../../context/authContext';
import { useEffect } from 'react';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
export default function DropDownWallet() {
  const {
    linkToken,
    bankAccounts,
    connectBankAccount,
    loadBankInfo,
    cryptoAccounts,
  } = useCart();
  const { auth } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const { connectCardanoWallets } = useCart();
  const [namiPubKeys, setNamiPubKeys] = useState([]);
  const [yoroiPubKeys, setYoroiPubKeys] = useState([]);
  const [eternlPubKeys, setEternlPubKeys] = useState([]);
  const [flintPubKeys, setFlintPubKeys] = useState([]);
  const [hasEternlConnected, setHasEternlConnected] = useState(false);

  const wallets = [
    {
      name: 'Nami',
      value: 'nami',
      pubKeys: namiPubKeys,
      img: Nami,
    },
    {
      name: 'Eternl',
      value: 'eternl',
      pubKeys: eternlPubKeys,
      img: Eternl,
    },
    {
      name: 'Yoroi',
      value: 'yoroi',
      pubKeys: yoroiPubKeys,
      img: Yoroi,
    },
    {
      name: 'Flint',
      value: 'flint',
      pubKeys: flintPubKeys,
      img: Flint,
    },
  ];

  const getWalletByName = (wallet, name) => {
    return wallet.walletName === name;
  };

  const getConnectedWallet = (wallets) => {
    const namiWallets = wallets.filter((wallet) =>
      getWalletByName(wallet, 'Nami')
    );
    const yoroiWallets = wallets.filter((wallet) =>
      getWalletByName(wallet, 'Yoroi')
    );
    const eternlWallets = wallets.filter((wallet) =>
      getWalletByName(wallet, 'Eternl')
    );
    const flintWallets = wallets.filter((wallet) =>
      getWalletByName(wallet, 'Flint')
    );

    setNamiPubKeys(namiWallets);
    setYoroiPubKeys(yoroiWallets);
    setEternlPubKeys(eternlWallets);
    setFlintPubKeys(flintWallets);
    if (eternlWallets.length > 0) {
      setHasEternlConnected(true);
    }
  };

  const loadCryptoInfo = async () => {
    try {
      const connectedWallets = await listCryptoAccounts();
      getConnectedWallet(connectedWallets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    if (auth) {
      await loadCryptoInfo();
    }
  }, []);

  return (
    <>
      <Dropdown.Menu className=" dropdown-box-shadow dropdown-menu-end drop-downs-sm-right-auto-wallet p-0">
        {auth && auth.user && (
          <Dropdown.Header className="wallet-dropdown-header">
            $ {(auth?.user?.wallet || 0).toFixed(2)}
            <Button
              variant="outline-light"
              className="float-end"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Cash out
            </Button>
          </Dropdown.Header>
        )}
        <Dropdown.Header className="wallet-dropdown-header">
          Select Wallet
        </Dropdown.Header>
        <div className="wallet-dropdown-container">
          {bankAccounts.length === 0 && (
            <Dropdown.Item
              eventKey="1"
              style={{ textAlign: 'left' }}
              className="wallet-dropdown-item"
              onClick={connectBankAccount}
            >
              <img src={Bank} alt="bank-icon" className="Bank_icon" />
              <span className="wallet-dropdown-text">Connect your bank</span>
            </Dropdown.Item>
          )}
          {bankAccounts.length > 0 &&
            bankAccounts.map((account, index) => {
              return (
                <Dropdown.Item
                  key={`bank-${index}`}
                  eventKey="1"
                  style={{ textAlign: 'left' }}
                  className="wallet-dropdown-item"
                >
                  <img src={Bank} alt="bank-icon" className="Bank_icon" />
                  <span className="wallet-dropdown-text">
                    {`${account.institution_name} (...${account.last4})`}
                  </span>
                </Dropdown.Item>
              );
            })}
          {wallets.map((wallet, index) => {
            return (
              <div key={index}>
                <Dropdown.Item
                  eventKey="1"
                  style={{ textAlign: 'left' }}
                  className="wallet-dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    connectCardanoWallets(wallet.value).then(() => {
                      loadCryptoInfo();
                    });
                  }}
                >
                  <img
                    src={CryptoWallet}
                    alt="crypto-wallet-icon"
                    className="crypto_wallet_icon"
                  />
                  <span className="wallet-dropdown-text">
                    Connect Your {wallet.name} Account
                  </span>
                  <br />
                  {wallet.value === 'eternl' && !hasEternlConnected && (
                    <span className="helper-text">
                      Will only connect if you have enabled the Eternl
                      <br />
                      extension to connect to Dapps
                    </span>
                  )}
                </Dropdown.Item>
                {wallet.pubKeys?.map((pubKey, index) => {
                  return (
                    <Dropdown.Item
                      key={index}
                      style={{ textAlign: 'left' }}
                      className="wallet-dropdown-item"
                    >
                      <img
                        className="img-fluid connected-wallet-icon"
                        src={wallet.img}
                        alt="back-icon"
                      />
                      <span className="wallet-dropdown-text">
                        {pubKey.walletAddress
                          ? `${pubKey.walletAddress.slice(
                              0,
                              4
                            )}...${pubKey.walletAddress.slice(-6)}`
                          : `...${pubKey.pubKeyAddress.slice(-10)}`}
                      </span>
                    </Dropdown.Item>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Dropdown.Menu>
      <Elements stripe={stripePromise}>
        {linkToken && (
          <StripeModal clientSecret={linkToken} reloadAccount={loadBankInfo} />
        )}
      </Elements>
      {showModal && (
        <div className="cart-modal">
          <CartModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
}
