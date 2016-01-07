var mongoose = require('mongoose');
var URLs = mongoose.model('URL');
var validUrl = require('url-valid');

exports.sendHomePage = function(req,res, next) {
    res.render('index', { title: 'URL Shortener Microservice' });
};

exports.shortenerUrl = function(req, res, next) {
    /* Step 1: Grab Base URL from .ENV File, original URL from Params
    *  and create query to check if the url is already created
    */
    var baseUrl = process.env.BASEURL;
    var original_url = req.params.url;
    var query = { original_url : original_url };
    
    //Step 2: check if URL is valid
    validUrl(original_url, function (err, valid) {
      if (err){
        console.log('error trying to validate the url : ' + err);
      } else {
        // if is valid continue..  
        if (valid){
            //Step 3: check if the url has been created before
            URLs.findOne(query, function(err, url){
                if (err) {
                    res.send({"Message": 'Error finding URL on database ' + err});
                } else {
                    if (url) {
                       res.send({"hi":" this url has been shortened before" ,"original_url": original_url, "short_url" : baseUrl + url._id}); 
                    } else {
                        // Step 4: create new url document and save it to the db
                        var newUrl = new URLs();
                        newUrl.original_url = original_url;
                        
                        newUrl.save(function(err, url){
                            if (err) {
                                console.log("error saving url");
                            } else {
                               // send response to the client
                               res.send({"original_url": url.original_url, "short_url" : baseUrl + url._id});  
                            }
                        });
                    }
                }
            });
        // send error message that it was not a valid url  
        } else {
            res.send({"Not a Valid URL": original_url});
        }
      }
    });
    
};