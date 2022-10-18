import axios from 'axios';

export async function editProfile(data) {
  const response = await axios.put('/api/my-profile', data);
  return response.data;
}
export async function getProfile(id) {
  const response = await axios.get(`/api/candidate-profile/${id}`);
  return response.data;
}
export async function setupMFA() {
  const response = await axios.post('/api/my-profile/enableMFA');
  return response.data;
}
export async function getMFA() {
  const response = await axios.get('/api/my-profile/mfa');
  return response.data;
}
export async function checkMFA() {
  const response = await axios.post('/api/my-profile/mfa');
  return response.data;
}
export async function getOnChainResume(id) {
  const response = await axios.get(`/api/${id}/onchain-resume`);
  return response.data;
}
export async function generateTwoFactor() {
  const response = await axios.get('/api/candidate/two-factor/generate');
  return response.data;
}
export async function sendTotp() {
  const response = await axios.post('/api/candidate/two-factor/send');
  return response.data;
}
export async function disableTwoFactor() {
  const response = await axios.put('/api/candidate/two-factor/disable');
  return response.data;
}
export async function enableTwoFactor(token) {
  const response = await axios.put('/api/candidate/two-factor/enable', {
    totp: token,
  });
  return response.data;
}
export async function validateTotp(token) {
  const response = await axios.put('/api/candidate/two-factor/validate', {
    totp: token,
  });
  return response.data;
}
