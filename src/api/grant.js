import axios from 'axios';

export async function getGrant(id) {
  const response = await axios.get(`/api/grants/${id}`);
  return response.data;
}
export async function createGrant(data) {
  const response = await axios.post('/api/grants/create', data);
  return response.data;
}
export async function addFunder(data) {
  const response = await axios.post('/api/grants/add-funder', data);
  return response.data;
}
export async function addMember(data) {
  const response = await axios.post('/api/grants/add-member', data);
  return response.data;
}
export async function getAllGrants() {
  try {
    const response = await axios.get(`/api/all-grants`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getFeaturedGrants(limit) {
  try {
    const response = await axios.get(`/api/grants?limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
