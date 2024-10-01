import React, { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
  authorId: number;
  genreId: number;
}

const BooksList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/list/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    // First check if there are books to display
    // If there are books, map over the books and display each book
    <div>
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="flex justify-between">
            <h3 className="text-xl">{book.title}</h3>
            <p>{book.authorId}</p>
            <p>{book.genreId}</p>
          </div>
        ))
      ) : (
        <div>No books found</div>
      )}
    </div>
  );
};

export default BooksList;
