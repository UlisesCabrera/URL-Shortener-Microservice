var mongoose = require('mongoose');

var urlSchema = new mongoose.Schema({
    original_url : String,
    shortener_url : String
});

// declare a model called User Which has schema userSchema.
mongoose.model("URL", urlSchema);