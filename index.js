const express = require('express');
const route = require('./routes/route.js');
const app = express();

app.use(express.json());
app.use('/', route);

const PORT = 9800;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
