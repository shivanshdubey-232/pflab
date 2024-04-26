const mongoose = require("mongoose");

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/books
// .env
mongoose.connect("mongodb+srv://docker:docker@cluster0.jg7uhul.mongodb.net/");
const bookSchema = mongoose.Schema({
  title: String,
  publisher: String,
  authors: String,
  copies: String,
});

const book = mongoose.model("books", bookSchema);

module.exports = {
  book,
};
