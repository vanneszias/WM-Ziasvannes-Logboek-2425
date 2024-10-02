import React, { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
  authorId: number;
  genreId: number;
}
interface Author {
  id: number;
  firstName: string;
  lastName: number;
  birthYear: number;
}
interface Genre {
  id: number;
  name: string;
}

const BooksList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [author, setAuthors] = useState<Author[]>([]);
  const [genre, setGenres] = useState<Genre[]>([]);

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

    // Fetch authors and genres
    const fetchAuthors = async () => {
      try {
        const response = await fetch("/api/list/authors");
        const data = await response.json();
        setAuthors(data);
      } catch (error) {
        console.error("Error fetching authors:", error);
        setAuthors([]);
      }
    };
    fetchAuthors();

    const fetchGenres = async () => {
      try {
        const response = await fetch("/api/list/genres");
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
        setGenres([]);
      }
    };
    fetchGenres();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    // First check if there are books to display
    // If there are books, map over the books and display each book
    // Use the author and genre id to find the author and genre in the author and genre tables
    <div>
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id} className="flex justify-between">
            <h3 className="text-xl">{book.title}</h3>
            <p>
              {author.find((a) => a.id === book.authorId)?.firstName}{" "}
              {author.find((a) => a.id === book.authorId)?.lastName}
            </p>
            <p>{genre.find((g) => g.id === book.genreId)?.name}</p>
          </div>
        ))
      ) : (
        <div>No books found</div>
      )}
    </div>
  );
};

export default BooksList;
