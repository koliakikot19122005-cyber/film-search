const mongoose = require('mongoose');

const Film = mongoose.model('Film', {
  url: String,
  categories: [String],
  title: String,
  description: String
});


module.exports=Film