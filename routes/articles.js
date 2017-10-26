const router = require('express').Router();

const {
  getAllArticles
} = require('../controllers/controllers');

router.route('/')
    .get(getAllArticles);

module.exports = router;