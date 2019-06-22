const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

let bookInfoSchema = new Schema ({
  id: {type: Number, required: true, unique: true},
  title: {type: String, required: true },
  author: {type: String, required: true },
  synopsis: {type: String, required: true },
  reviews: {type: Number, required: true},
  average_rating: {type: Number, required: true},
  number_of_ratings: {type: Number, required: true},
});

let Book = mongoose.model ('Book', bookInfoSchema);
