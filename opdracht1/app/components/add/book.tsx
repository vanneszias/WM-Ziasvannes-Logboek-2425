import React, { useEffect, useState } from "react";

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

const AddBook: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

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

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  let title = "";
  let code = "";
  let author = "";
  let genre = "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBook = {
      title,
      code,
      author,
      genre,
    };
    try {
      const response = await fetch("/api/create/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
      // Reload the page to see the new book
      if (response.ok) {
        window.location.reload();
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const BookForm: React.FC = () => (
    <form
      onSubmit={handleSubmit}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={toggleFormVisibility}
      id="bookForm"
    >
      <div
        className="bg-white p-6 rounded shadow-md"
        onClick={(e) => e.stopPropagation()} // Prevent the form from closing when clicked inside
      >
        <div>
          <input
            type="text"
            id="title"
            placeholder="Enter book title"
            onChange={(e) => {
              title = e.target.value;
            }}
            required
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="text"
            id="code"
            placeholder="Enter book code"
            onChange={(e) => {
              code = e.target.value;
            }}
            required
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <select
            id="author"
            onChange={(e) => {
              author = e.target.value;
            }}
            required
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select an author</option>
            {authors.map((author: Author) => (
              <option key={author.id} value={author.id}>
                {author.firstName} {author.lastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id="genre"
            onChange={(e) => {
              genre = e.target.value;
            }}
            required
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select a genre</option>
            {genres.map((genre: Genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-slate-900 text-white p-2 rounded">
            Add Book
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      <button
        onClick={toggleFormVisibility}
        className="bg-slate-600 p-3 w-full rounded text-slate-100 hover:bg-slate-800"
      >
        {isFormVisible ? "Hide" : "Add"} Book
      </button>
      {isFormVisible && <BookForm />}
    </div>
  );
};

export default AddBook;
