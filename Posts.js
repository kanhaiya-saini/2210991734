const express = require('express');
const app = express();
const PORT = 9800;

const posts = [
  { id: 246, userid: 1, content: "Post about ant" },
  { id: 161, userid: 1, content: "Post about elephant" },
  { id: 150, userid: 1, content: "Post about ocean" },
  { id: 370, userid: 1, content: "Post about monkey" },
  { id: 344, userid: 1, content: "Post about ocean" },
  { id: 952, userid: 1, content: "Post about zebra" },
  { id: 647, userid: 1, content: "Post about igloo" },
  { id: 421, userid: 1, content: "Post about house" },
  { id: 890, userid: 1, content: "Post about bat" },
  { id: 461, userid: 1, content: "Post about umbrella" }
];

app.get('/evaluation-service/users/:userid/posts', (req, res) => {
  const userid = parseInt(req.params.userid);
  const userPosts = posts.filter(post => post.userid === userid);
  res.json({ posts: userPosts });
});

app.listen(PORT, () => {
  console.log(`Mock post service running at http://localhost:${PORT}`);
});
