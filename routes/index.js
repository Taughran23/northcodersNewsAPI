const express = require('express');
const { topics } = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
 });
 
 router.get('/topics', topics.getAllTopics);
 
 module.exports = router;