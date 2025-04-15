const axios = require('axios');
const { sortByCommentCount, sortByNewestPosts } = require('../utils/index.js');

const BASE_URL = 'http://20.244.56.144/evaluation-service';

async function fetchUsers() {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data.users;
}

async function fetchPostsByUser(userId) {
  const res = await axios.get(`${BASE_URL}/users/${userId}/posts`);
  return res.data.posts;
}

async function fetchCommentsByPost(postId) {
  const res = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
  return res.data.comments;
}

// Get top 5 users with most total comments on their posts
async function getTopUsers() {
  const users = await fetchUsers();
  const commentCounts = [];

  for (const userId in users) {
    const posts = await fetchPostsByUser(userId);
    let totalComments = 0;

    for (const post of posts) {
      const comments = await fetchCommentsByPost(post.id);
      totalComments += comments.length;
    }

    commentCounts.push({
      user: users[userId],
      totalComments
    });
  }

  commentCounts.sort((a, b) => b.totalComments - a.totalComments);
  return commentCounts.slice(0, 5);
}

async function getPostsByType(type) {
  const users = await fetchUsers();
  let allPosts = [];

  for (const userId in users) {
    const posts = await fetchPostsByUser(userId);
    allPosts.push(...posts);
  }

  if (type === 'latest') {
    return sortByNewestPosts(allPosts).slice(0, 5);
  }

 
  const postCommentMap = [];

  for (const post of allPosts) {
    const comments = await fetchCommentsByPost(post.id);
    postCommentMap.push({ ...post, commentCount: comments.length });
  }

  return sortByCommentCount(postCommentMap);
}

module.exports = { getTopUsers, getPostsByType };
