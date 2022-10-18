import axios from 'axios';

export async function generateTwoFactor() {
  return await axios.get('/api/candidate/two-factor/generate');
}

export async function sendTotp() {
  return await axios.post('/api/candidate/two-factor/send');
}

export async function disableTwoFactor() {
  return await axios.put('/api/candidate/two-factor/disable');
}

export async function enableTwoFactor(token) {
  return await axios.put('/api/candidate/two-factor/enable', {
    totp: token,
  });
}

export async function validateTotp(token) {
  return await axios.put('/api/candidate/two-factor/validate', {
    totp: token,
  });
}
