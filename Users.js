const express = require('express');
const app = express();
const PORT = 9800;

const users = {
  "1": "John Doe",
  "10": "Helen Moore",
  "11": "Ivy Taylor",
  "12": "Jack Anderson",
  "13": "Kathy Thomas",
  "14": "Liam Jackson",
  "15": "Mona Harris",
  "16": "Nathan Clark",
  "17": "Olivia Lewis",
  "18": "Paul Walker",
  "19": "Quinn Scott",
  "2": "Jane Doe",
  "20": "Rachel Young",
  "3": "Alice Smith",
  "4": "Bob Johnson",
  "5": "Charlie Brown",
  "6": "Diana White",
  "7": "Edward Davis",
  "8": "Fiona Miller",
  "9": "George Wilson"
};

app.get('/evaluation-service/users', (req, res) => {
  res.json({ users });
});

app.listen(PORT, () => {
  console.log(`Mock user service running on http://localhost:${PORT}`);
});
