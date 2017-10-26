const router = require('express').Router();
const {
  getAllTopics
} = require('../controllers/controllers');

router.route('/')
    .get(getAllTopics);

    module.exports = router;