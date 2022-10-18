import axios from 'axios';

export function snapbrilliaFile(file) {
  return `${process.env.REACT_APP_API_URL}/assets/${file}`;
}

export async function uploadFile(formData) {
  try {
    const response = await axios.post(`/api/files`, formData);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
}
