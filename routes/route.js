const express = require('express');
const router = express.Router();
const { getTopUsers, getPostsByType } = require('../services/Service.js');


router.get('/users', async (req, res) => {
  try {
    const data = await getTopUsers();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/posts', async (req, res) => {
  const { type } = req.query;
  if (!['latest', 'popular'].includes(type)) {
    return res.status(400).json({ error: 'Invalid type. Use latest or popular.' });
  }

  try {
    const data = await getPostsByType(type);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
