const { Articles, Topics, Comments } = require("../models/models");

exports.getAllArticles = (req, res, next) => {
  Articles.find({}, (err, articles) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ articles: articles });
  });
};

exports.getAllTopics = (req, res, next) => {
  Topics.find({}, (err, topics) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ topics: topics });
  });
};

exports.getArticlesByTopic = (req, res, next) => {
  const topic = req.params.topic_title;
    console.log(topic);
  Articles.find({ belongs_to: topic }, (err, articles) => {
    if (!articles.length) {
      return next({status: 404, message: 'Topic not found'});
    }
    if (err) {
      return next(err);
    }
    res.json({articles});
  });
};

exports.getAllCommentsForArticle = (req, res, next) => {
  const id = req.params.article_id;
  Comments.find({ belongs_to: id }, (err, comments) => {
    if (!comments.length) {
      return next({status: 404, message: 'Comment not found'});
    }
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
};

exports.postNewCommentToArticle = (req, res, next) => { // eslint-disable-line no-unused-vars
  const id = req.params.article_id;
  var comment = new Comments();
  comment.body = req.body.comment;
  comment.belongs_to = id;

  comment
    .save()
    .then((comment) => {
      res.status(201).json({comment});
    })
    .catch(console.log);  
};

exports.putVoteCount = (req, res, next) => {
  const query = req.query.vote;
  const id = req.params.article_id;
  let inc;
  if (query === "up") inc = 1;
  if (query === "down") inc = -1;

  Articles.findByIdAndUpdate(
    id,
    { $inc: { votes: inc } },
    { new: true },
    (err, article) => {
      if (err) {
        return next(err);
      }
      res.json({ message: article.votes });
    }
  );
};