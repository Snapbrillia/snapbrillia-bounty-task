import axios from 'axios';

export async function getOrder(id) {
  const response = await axios.get(`/api/my-orders/${id}`);
  return response.data;
}

export async function getPayout(id) {
  const response = await axios.get(`/api/my-payouts/${id}`);
  return response.data;
}

export async function getMyCart() {
  const response = await axios.get(`/api/my-cart`);
  return response.data;
}

export async function addToCart(data) {
  const response = await axios.put('/api/my-cart', data);
  return response.data;
}

export async function postStripeIntents(orderid, account) {
  try {
    const response = await axios.post('/api/cart-stripe-intents', {
      orderId: orderid,
      account: account,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}

export async function confirmOrder(intentid) {
  try {
    const response = await axios.post('/api/confirm-order', {
      intent: intentid,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
