import Modal from 'react-bootstrap/Dropdown';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useStripe } from '@stripe/react-stripe-js';

export default function StripeModal({ clientSecret, reloadAccount }) {
  const stripe = useStripe();

  const connectBankAccount = async () => {
    try {
      const { financialConnectionsSession } =
        await stripe.collectFinancialConnectionsAccounts({
          clientSecret: clientSecret,
        });
      if (financialConnectionsSession.accounts.length > 0) {
        toast('Connect bank successfully');
        reloadAccount();
      }
    } catch (error) {
      console.log(error);
      // toast(error.message);
    }
  };

  useEffect(() => {
    if (clientSecret) {
      connectBankAccount();
    }
  }, [clientSecret]);
  return <Modal show={true}></Modal>;
}
