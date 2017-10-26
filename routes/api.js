const router = require('express').Router();

const articlesRouter = require('./articles');
const topicsRouter = require('./topics');

const {
    putCommentVoteCount,
    deleteComment, 
    getUserProfile
} = require('../controllers/controllers');

router.use('/articles', articlesRouter);

router.use('/topics', topicsRouter);

router.route('/comments/:comment_id')
    .put(putCommentVoteCount)
    .delete(deleteComment);

router.route('/users/:username').get(getUserProfile);

module.exports = router;