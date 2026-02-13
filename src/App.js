import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { title: "Think and Grow Rich", author: "Napoleon Hill" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Ikigai", author: "Hector Garcia" }
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add Book
  const addBook = () => {
    if (newTitle && newAuthor) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove Book
  const removeBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  // Search Filter
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      <input
        className="search"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="form">
        <input
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <input
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />

        <button onClick={addBook}>Add Book</button>
      </div>

      {filteredBooks.map((book, index) => (
        <div className="book-card" key={index}>
          <div>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
          <button className="remove" onClick={() => removeBook(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
