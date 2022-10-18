import axios from 'axios';

export async function getListNotifications() {
  try {
    const response = await axios.get(`/api/notifications`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}
