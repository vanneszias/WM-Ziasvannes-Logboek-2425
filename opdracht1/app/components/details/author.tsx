import { Book } from "@prisma/client";
import React from "react";
import { useState } from "react";

interface Author {
  id: number;
  firstName: string;
  lastName: string;
  birthYear: number;
}

const AuthorPopUp: React.FC<{ author: Author }> = ({ author }) => {
  const [firstName, setFirstName] = useState<string>(author.firstName);
  const [lastName, setLastName] = useState<string>(author.lastName);
  const [birthYear, setBirthYear] = useState<number>(author.birthYear);

  const [books, setBooks] = useState<Book[]>([]);
  const [showBooks, setShowBooks] = useState<boolean>(false);

  let newAuthor: Author = {
    id: author.id,
    firstName,
    lastName,
    birthYear,
  };

  const saveAuthor = async (author?: Author) => {
    try {
      const response = await fetch("/api/edit/author", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(author),
      });
      if (response.ok) {
        window.location.reload();
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error saving author:", error);
    }
  };

  const deleteAuthor = async (author?: Author) => {
    try {
      const response = await fetch("/api/delete/author", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(author),
      });
      if (response.ok) {
        window.location.reload();
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting author:", error);
    }
  };

  const listBooks = async (author?: Author) => {
    try {
      const response = await fetch("/api/list/booksByAuthor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(author),
      });
      if (response.ok) {
        const books = await response.json();
        if (response.status !== 200) {
          setBooks([]);
          return;
        }
        setBooks(books);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error listing books by author:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white p-6 rounded shadow-md cursor-auto"
        onClick={(e) => e.stopPropagation()} // Do not trigger blank click event in this div.
      >
        <h2 className="text-2xl font-semibold">
          {author.firstName + " " + author.lastName}
        </h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              defaultValue={author.firstName}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="lastName"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              defaultValue={author.lastName}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="birthYear"
            >
              Birth Year
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="birthYear"
              type="number"
              onChange={(e) => setBirthYear(Number(e.target.value))}
              defaultValue={author.birthYear}
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded"
              onClick={() => {
                listBooks(author);
                setShowBooks(true);
              }}
            >
              List Books
            </button>
            {showBooks && (
              <div
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                onClick={() => setShowBooks(false)}
              >
                <div
                  className="bg-white p-6 rounded shadow-md cursor-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-xl font-semibold">
                    Books by {author.firstName + " " + author.lastName}:
                  </h3>
                  <ul>
                    {books.length > 0 ? (
                      books.map((book: Book) => (
                        <li key={book.id}>
                          {book.title} ({book.code})
                        </li>
                      ))
                    ) : (
                      <li>No books found</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                newAuthor = {
                  id: author.id,
                  firstName,
                  lastName,
                  birthYear,
                };
                saveAuthor(newAuthor);
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                deleteAuthor(author);
              }}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorPopUp;
