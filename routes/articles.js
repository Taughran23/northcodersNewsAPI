const router = require('express').Router();

const {
  getAllArticles, 
   getAllCommentsForArticle
} = require('../controllers/controllers');

router.route('/')
    .get(getAllArticles);

router.route('/:article_id/comments')
    .get(getAllCommentsForArticle);

module.exports = router;