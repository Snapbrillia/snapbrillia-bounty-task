import axios from 'axios';

export async function getAllBounty() {
  try {
    const response = await axios.get('/api/v1/bounties');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getFeatureBounties(limit) {
  try {
    const response = await axios.get(`/api/v1/bounties/feature?limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function getBounty(id) {
  try {
    const response = await axios.get(`/api/v1/bounty/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function expressInterest(id, body) {
  try {
    const response = await axios.post(
      `/api/bounties/${id}/express-interest`,
      body
    );
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
export async function getMyAssessment(id) {
  try {
    const response = await axios.get(`/api/bounties/${id}/my-assessment`);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
export async function getAllMyAssessments({status = ''}) {
  try {
    const response = await axios.get(`/api/my-bounty-assessments?status=${status}`);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}

export async function getSimilarBounties(limit) {
  try {
    const response = await axios.get(`/api/v1/bounties/feature?limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export async function submitWork(id, result) {
  try {
    const response = await axios.post(`/api/bounty-assessment/${id}/submit`, {
      result
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
