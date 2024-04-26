const express = require("express");
const { createBook, updateBook } = require("./types");
const { book } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/book", async function (req, res) {
  console.log("in post");
  const createPayload = req.body;
  const parsedPayload = createBook.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in mongodb
  await book.create({
    title: createPayload.title,
    publisher: createPayload.publisher,
    authors: createPayload.authors,
    copies: createPayload.copies,
  });

  res.json({
    msg: "book created",
  });
});

app.get("/books", async function (req, res) {
  const books = await book.find({});
  console.log("get")
  res.json({
    books,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateBook.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await book.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "book marked as completed",
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
} );

