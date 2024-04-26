const zod = require("zod");

const createBook = zod.object({
  title: zod.string(),
  publisher: zod.string(),
  authors: zod.string(),
  copies: zod.string(),
});

const updateBook = zod.object({
  id: zod.string(),
});

module.exports = {
  createBook: createBook,
  updateBook: updateBook,
};
