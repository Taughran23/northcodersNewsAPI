const router = require('express').Router();

const {
  getAllArticles,
  getArticle,
  getAllCommentsForArticle,
  postNewCommentToArticle, 
  putVoteCount
} = require('../controllers/controllers');

router.route('/')
  .get(getAllArticles);

router.route('/:article_id/comments')
  .get(getAllCommentsForArticle)
  .post(postNewCommentToArticle);

router.route('/:article_id')
  .get(getArticle)
  .put(putVoteCount);

module.exports = router;