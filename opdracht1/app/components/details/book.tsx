import React from "react";
import { useState, useEffect } from "react";

interface Book {
  id: number;
  title: string;
  code: string;
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

const BookPopUp: React.FC<{ book: Book }> = ({ book }) => {
  const [title, setTitle] = useState<string>(book.title);
  const [code, setCode] = useState<string>(book.code);
  const [authorId, setAuthorId] = useState<number>(book.authorId);
  const [genreId, setGenreId] = useState<number>(book.genreId);

  const [authors, setAuthors] = useState<Author[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  let newBook: Book = { id: book.id, title, code, authorId, genreId };

  // Fetch authors and genres
  useEffect(() => {
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

    fetchAuthors();
    fetchGenres();
  }, []);

  const saveBook = async (book?: Book) => {
    if (!book) {
      console.error("No book to save");
      return;
    }
    try {
      const response = await fetch("/api/edit/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
      if (response.ok) {
        // Reload page to see the updated book
        window.location.reload();
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (book: Book) => {
    try {
      const response = await fetch("/api/delete/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book.id),
      });
      if (response.ok) {
        // Reload page to see the updated book
        window.location.reload();
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // Add the pop-up form to edit the book.
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white p-6 rounded shadow-md"
        onClick={(e) => e.stopPropagation()} // Do not trigger blank click event in this div.
      >
        <h2 className="text-2xl font-semibold">{book.title}</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={book.title}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="code"
            >
              ISBN-code
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight"
              id="code"
              type="text"
              onChange={(e) => setCode(e.target.value)}
              defaultValue={book.code}
            />
          </div>
          <div>
            <select
              onChange={(e) => {
                setAuthorId(Number(e.target.value));
              }}
              value={authorId}
              className="shadow border rounded w-full py-2 px-3 my-2 leading-tight"
            >
              {authors.map((author: Author) => (
                <option key={author.id} value={author.id}>
                  {author.firstName} {author.lastName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={(e) => {
                setGenreId(Number(e.target.value));
              }}
              value={genreId}
              className="shadow border rounded w-full py-2 px-3 my-4 leading-tight"
            >
              {genres.map((genre: Genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                newBook = { id: book.id, title, code, authorId, genreId };
                saveBook(newBook);
              }}
            >
              Save
            </button>

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  deleteBook(book);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookPopUp;
