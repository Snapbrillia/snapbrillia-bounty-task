import axios from 'axios';

export async function getAllTopicByBounty(id) {
  try {
    const response = await axios.get('/api/topic/get-by-bounty/' + id);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
}

export async function getAllDiscussionByTopic(id) {
  try {
    const response = await axios.get('/api/b2c/discussion/get-all-by-topic/' + id);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
}

export async function getAllCommentByDiscussion(id) {
  try {
    const response = await axios.get('/api/b2c/comment/get-all-comments-from-discussion/' + id);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
}

export async function createComment(body) {
  try {
    const response = await axios.post('/api/b2c/comment/create', body);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
}
