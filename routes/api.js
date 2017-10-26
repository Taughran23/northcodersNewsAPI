const router = require('express').Router();

const articlesRouter = require('./articles');
const topicsRouter = require('./topics');

router.use('/articles', articlesRouter);

router.use('/topics', topicsRouter);

module.exports = router;