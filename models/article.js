var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost/blogio', function(err) {
    if (err) {
        throw err;
    }
});

var articleSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{
        body: String,
        date: Date
    }],
    date: {
        type: Date,
        default: Date.now
    },
    hidden: {
        type: Boolean,
        default: false
    },
    meta: {
        votes: Number,
        favs: Number
    }
});

module.exports = mongoose.model('Article', articleSchema);
