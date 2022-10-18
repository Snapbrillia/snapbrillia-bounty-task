import axios from 'axios';

export async function generateMagicLink(email) {
  console.log('generateMagicLink');
  const response = await axios.post('/api/candidate/magic-link', {
    email,
  });
  return response.data;
}

export async function loginWithMagicToken(token, tokenType) {
  const response = await axios.post('/api/candidate/login', {
    token,
    tokenType,
  });
  return response.data;
}

export async function addCardanoWallet(walletName, changeAddress) {
  try {
    const response = await axios.post('/api/add-cardano-wallet', {
      walletName,
      changeAddress,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function listCryptoAccounts() {
  try {
    const response = await axios.get('/api/get-cardano-wallet');
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}

export async function logout() {
  const response = await axios.delete('/api/candidate/logout');
  return response.data;
}

export async function getCurrentUser() {
  const response = await axios.get('/api/candidate/auth');
  return response.data;
}

export async function linkAccount(token, tokenType) {
  try {
    const response = await axios.post('/api/candidate/link-account', {
      token,
      tokenType,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}

export async function plaidLinkToken() {
  try {
    const response = await axios.post('/api/candidate/plaid-link-token', {});
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}

export async function exchangePlaidToken(publicToken, accountId?) {
  try {
    const response = await axios.post('/api/candidate/exchange-plaid-token', {
      publicToken,
      accountId,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
export async function createPayout(amount, payment) {
  try {
    const response = await axios.post('/api/candidate/stripe-payout', {
      amount,
      payment,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}

export async function createStripeSession() {
  try {
    const response = await axios.post('/api/candidate/stripe-session');
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
export async function listStripeAccounts() {
  try {
    const response = await axios.get('/api/candidate/stripe-accounts');
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
export async function getStripeAccountBalance(accountId) {
  try {
    const response = await axios.get(
      `/api/candidate/stripe-accounts/${accountId}`
    );
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
