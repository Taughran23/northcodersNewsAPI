const { Articles, Topics } = require("../models/models");

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