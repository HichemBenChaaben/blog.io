var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/**
 * Getting all the articles
 * */
router.get('/', function(req, res, next) {
    Article.find({}).exec(function(err, messages) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot list the articles'
            });
        }
        res.json(messages);
    });
});

/**
 * Getting an article by a given id
 */
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    Article.findById(req.params.id).exec(function(err, article) {
        if (err) {
            throw err;
        }
        res.json(article);
    });
});

// Articles api
router.post('/add', function(req, res, next) {
    console.log('request being send is ', req.body);
    var article = new Article(req.body);
    article.save(function(err) {
        if (err) {
            throw err;
        }
        res.json(200, {
            message: 'article saved successfully'
        });
    });
});

module.exports = router;
