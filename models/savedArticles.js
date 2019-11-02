var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var savedArticles = new Schema({
  title: {
    type: String,
    unique: true
  },
  url: String,
  image: String,
  summary: String
});

var savedarticle = mongoose.model("SavedArticles", savedArticles);
module.exports = savedarticle;
