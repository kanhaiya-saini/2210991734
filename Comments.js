const express = require('express');
const app = express();
const port = 9800;


app.get('/comments', (req, res) => {
  const response = {
    comments: [
      {
        id: 3893,
        postid: 150,
        content: "Old comment"
      },
      {
        id: 4791,
        postid: 150,
        content: "Boring comment"
      }
    ]
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
