export function Books({ books, onbookClick }) {
  const handlebookClick = (id) => {
    // Call the onbookClick function from props
    onbookClick(id);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {books.map(function (book) {
        return (
          <div key={book._id} style={bookStyle}>
            <h1>Title: {book.title}</h1>
            <h2>Publisher: {book.publisher}</h2>
            <h2>Authors: {book.authors}</h2>
            <h2>Copies: {book.copies}</h2>
          </div>
        );
      })}
    </div>
  );
}

// Define inline styles
const bookStyle = {
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out",
  width: "100%",
  maxWidth: "600px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "background-color 0.2s ease-in-out",
};

export default Books;
