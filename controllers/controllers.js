const { Articles } = require("../models/models");

exports.getAllArticles = (req, res, next) => {
  Articles.find({}, (err, articles) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ articles: articles });
  });
};