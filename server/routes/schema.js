var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogsSchema = new Schema({
    name: String,
    url: String,
    type: String
});

module.exports = mongoose.model('blogs', BlogsSchema);
