import React, { useEffect, useState } from "react";
import BookPopup from "../details/book";

interface Book {
  id: number;
  title: string;
  authorId: number;
  genreId: number;
  popup?: boolean;
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
        books.map((book: Book) => (
          <div
            key={book.id}
            className="flex justify-between space-x-5 border border-gray-300 p-2 hover:bg-slate-100 cursor-pointer"
            onClick={() => {
              book.popup = !book.popup;
              setBooks([...books]); // This is a workaround to force a rerender
            }}
          >
            <p>{book.id}</p>
            <p>{book.title}</p>
            <p>
              {author.find((a) => a.id === book.authorId)?.firstName.at(0)}
              {". "}
              {author.find((a) => a.id === book.authorId)?.lastName}
            </p>
            <p>{genre.find((g) => g.id === book.genreId)?.name}</p>
            {book.popup && <BookPopup book={book} />}
          </div>
        ))
      ) : (
        <div>No books found</div>
      )}
    </div>
  );
};

export default BooksList;
