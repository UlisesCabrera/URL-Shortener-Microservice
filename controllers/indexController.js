var mongoose = require('mongoose');
var Urls = mongoose.model('URL');

exports.sendHomePage = function(req,res, next) {
    res.render('index', { title: 'URL Shortener Microservice' });
};

exports.shortenerUrl = function(req, res, next) {
    res.send({"original_url": req.params.url});
}