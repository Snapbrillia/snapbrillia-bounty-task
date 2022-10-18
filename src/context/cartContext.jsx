import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from 'react';
import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';
import { toast } from 'react-toastify';
import * as orderCandidateAPI from '../api/order';
import { navigate } from '@reach/router';

import {
  createStripeSession,
  listStripeAccounts,
  addCardanoWallet,
} from '../api/session';

import { useAuth } from './authContext';
import { listCryptoAccounts } from '../api/session';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [orderId, setOrderId] = useState([]);
  const [cart, setCart] = useState([]);
  const [bankAccounts, setBankAccounts] = useState([]);
  const [cashOut, setCashOut] = useState({
    amount: 0,
    payment: '',
  });
  const [cryptoAccounts, setCryptoAccounts] = useState([]);
  const [cartModal, setCartModal] = useState(false);
  const [linkToken, setLinkToken] = useState('');
  const [chainId, setChainId] = useState('');
  const [isValidCart, setValidCart] = useState(false);
  const { auth } = useAuth();

  const connectCardanoWallets = async (selectedWallet) => {
    if (auth) {
      const walletFound = !!window?.cardano?.[selectedWallet];
      const walletName =
        selectedWallet.charAt(0).toUpperCase() + selectedWallet.slice(1);
      toast(`Connecting to ${walletName}...`);
      if (walletFound) {
        try {
          const walletApi = await window.cardano[selectedWallet].enable();
          const changeAddress = await walletApi.getChangeAddress();
          await addCardanoWallet(walletName, changeAddress);
          toast(`Connected to ${walletName} Successfully!`);
          return walletApi;
        } catch (error) {
          if (error.response?.data) {
            toast(error.response.data);
          } else {
            toast(error.message);
          }
        }
      }
    }
  };

  const connector = new WalletConnect({
    bridge: 'https://bridge.walletconnect.org',
    qrcodeModal: QRCodeModal,
  });

  connector.on('connect', (error, payload) => {
    if (error) {
      throw error;
    }
    const { accounts, chainId } = payload.params[0];
    setCryptoAccounts(accounts);
    setChainId(chainId);
  });

  connector.on('session_update', (error, payload) => {
    if (error) {
      throw error;
    }
    const { accounts, chainId } = payload.params[0];
    setCryptoAccounts(accounts);
    setChainId(chainId);
  });

  connector.on('disconnect', (error, payload) => {
    if (error) {
      throw error;
    }
    setCryptoAccounts([]);
    setChainId('');
  });

  const connectCrypto = () => {
    if (!connector.connected) {
      connector.createSession();
    }
  };

  const disconnectCrypto = () => {
    connector.killSession();
  };

  const connectBankAccount = async () => {
    const { client_secret } = await createStripeSession();
    setLinkToken(client_secret);
  };

  const loadBankInfo = async () => {
    try {
      const { accounts } = await listStripeAccounts();
      if (accounts) {
        setBankAccounts(accounts);
      }
      return accounts;
    } catch (error) {
      // toast(error.message);
    }
  };

  const loadCryptoInfo = async () => {
    try {
      const connectedWallets = await listCryptoAccounts();
      setCryptoAccounts(connectedWallets);
      return connectedWallets;
    } catch (error) {
      toast('Error loading connected wallets');
    }
  };

  useEffect(() => {
    if (auth) {
      loadCryptoInfo();
      loadBankInfo();
      orderCandidateAPI
        .getMyCart()
        .then((data) => {
          setOrderId(data._id);
          setCart(data.items);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    setCryptoAccounts(connector.accounts);
  }, [auth]);

  const accounts = useMemo(() => {
    let userAccounts = [];
    bankAccounts.map((account) => {
      userAccounts.push({
        type: 'bank',
        name: `${account.institution_name} (...${account.last4})`,
        id: account.id,
      });
      return account;
    });
    cryptoAccounts.map((account) => {
      userAccounts.push({
        type: 'crypto',
        name: account.walletName,
        id: account._id,
        pubKeyAddress: account.pubKeyAddress,
        walletAddress: account.walletAddress,
      });
      return account;
    });
    return userAccounts;
  }, [bankAccounts, cryptoAccounts]);

  useEffect(() => {
    checkValidCart(cart);
  }, [cart]);

  const checkValidCart = (cart) => {
    const isValidCart =
      cart.length > 0 &&
      cart.every((item) => {
        return item.id && item.payment && Number(item.amount) > 0;
      });
    setValidCart(isValidCart);
  };

  const addItem = (item) => {
    const isInCart = cart.find((element) => element.id === item._id);
    if (!isInCart) {
      setCart((prevState) => [
        ...prevState,
        {
          id: item._id,
          amount: 0,
          grant: item,
        },
      ]);
    }
  };

  const removeItem = (item) => {
    setCart(cart.filter((e) => e.id !== item.id));
  };

  const updateItem = (item, data) => {
    setCart(
      cart.map((obj) => {
        if (obj.id === item.id) {
          return {
            ...obj,
            ...data,
          };
        }
        return obj;
      })
    );
  };

  const clearCartItems = () => {
    setCart([]);
  };

  const saveCart = async () => {
    try {
      await orderCandidateAPI.addToCart({ items: cart });
    } catch (error) {
      // toast(error.message);
    }
  };

  const purchase = async (redirect) => {
    try {
      const oldCartId = orderId;
      await orderCandidateAPI.addToCart({ items: cart });
      await orderCandidateAPI.confirmOrder(orderId);
      await orderCandidateAPI.getMyCart().then((data) => {
        setOrderId(data._id);
        setCart(data.items);
      });
      if (redirect) {
        navigate(`/orders/${oldCartId}`);
      }
      return oldCartId;
    } catch (error) {
      // toast(error.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateItem,
        setCart,
        cartModal,
        setCartModal,
        connectCrypto,
        disconnectCrypto,
        connectBankAccount,
        loadBankInfo,
        linkToken,
        accounts,
        bankAccounts,
        cryptoAccounts,
        isValidCart,
        orderId,
        saveCart,
        connectCardanoWallets,
        cashOut,
        setCashOut,
        loadCryptoInfo,
        purchase,
        clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
