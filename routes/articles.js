const router = require('express').Router();

const {
  getAllArticles,
  getAllCommentsForArticle,
  postNewCommentToArticle
} = require('../controllers/controllers');

router.route('/')
  .get(getAllArticles);

router.route('/:article_id/comments')
  .get(getAllCommentsForArticle)
  .post(postNewCommentToArticle);

module.exports = router;