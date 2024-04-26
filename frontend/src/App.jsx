import { useState, useEffect } from "react";
import "./App.css";
import { CreateBook } from "./components/CreateBook";
import { Books } from "./components/Books";

function App() {
  const [books, setBooks] = useState([]);

  const handlebookClick = (id) => {
    // Find the clicked book in the books array
    const updatedbooks = books.map((book) => {
      if (book._id === id) {
        // Toggle the completed status
        return { ...book, completed: !book.completed };
      }
      return book;
    });
    // Update the books state with the updatedbooks array
    setBooks(updatedbooks);
  };

  useEffect(() => {
    // Fetch books data when component mounts
    fetch("http://localhost:3000/books").then(async function (res) {
      const json = await res.json();
      console.log(json)
      setBooks(json.books);
    });
  }, []);

  return (
    <div>
      <CreateBook />
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "40px",
        }}
      >
        LIBRARY MANAGEMENT SYSTEM
      </h1>
      <Books books={books} onbookClick={handlebookClick} />
    </div>
  );
}

export default App;
