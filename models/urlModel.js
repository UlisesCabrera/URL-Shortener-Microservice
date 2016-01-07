var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection(process.env.MONGO_URI);

autoIncrement.initialize(connection);

var urlSchema = new mongoose.Schema({
    original_url : String,
    short_url : String
});

urlSchema.plugin(autoIncrement.plugin, 'URL');

// declare a model called User Which has schema userSchema.
mongoose.model("URL", urlSchema);