import { useState } from "react";

export function CreateBook(props) {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [authors, setAuthors] = useState("");
  const [copies, setCopies] = useState("");

  const inputStyle = {
    display: "flex",
    padding: "8px",
    marginRight: "10px",
    marginTop: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    margin: "10px",
    borderRadius: "5px",
    padding: "8px 16px",
    cursor: "pointer",
  };

  const handleSubmit = () => {
    fetch("http://localhost:3000/book", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        publisher: publisher,
        authors: authors,
        copies: copies,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to add book");
      })
      .then(() => {
        alert("book added");
        setTitle("");
        setPublisher("");
        setAuthors("");
        setCopies("");
      })
      .catch((error) => {
        console.error("Error adding book:", error);
        alert("Failed to add book");
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Publisher"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Authors"
        value={authors}
        onChange={(e) => setAuthors(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Copies"
        value={copies}
        onChange={(e) => setCopies(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleSubmit} style={buttonStyle}>
        Add book
      </button>
    </div>
  );
}
