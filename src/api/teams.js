import axios from 'axios';

export async function getAllTeams(query) {
  // query = {bountyId: 'stringId', status: 'string'} status = new, missed, in-progress, completed, reviewed
  let filter = `bountyId=${query.bountyId}`;
  if (query.status) {
    filter += `&status=${query.status}`
  }
  const response = await axios.get(
    `/api/all-teams?${filter}`
  );
  return response.data;
}

export async function getMyTeams(query = {}) {
  let filter = '';
  if (query.status) {
    filter += `status=${query.status}`
  }
  const response = await axios.get(
    `/api/my-teams?${filter}`
  );
  return response.data;
}

export async function getOneTeam(id) {
  const response = await axios.get(`/api/teams/${id}`);
  return response.data;
}
export async function approveMentee(id) {
  const response = await axios.post(`/api/teams/${id}/approve`);
  return response.data;
}
export async function rejectMentee(id) {
  const response = await axios.post(`/api/teams/${id}/reject`);
  return response.data;
}

export async function rewardTeam(id, body) {
  const response = await axios.post(`/api/teams/${id}/reward`, body);
  return response.data;
}

export async function startTeam(id) {
  const response = await axios.post(`/api/teams/${id}/start`);
  return response.data;
}
