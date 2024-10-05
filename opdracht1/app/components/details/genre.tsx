import React from "react";
import { useState } from "react";

interface Genre {
  id: number;
  name: string;
}

const GenrePopUp: React.FC<{ genre: Genre }> = ({ genre }) => {
  const [name, setName] = useState<string>(genre.name);

  let newGenre: Genre = { id: genre.id, name };

  const saveGenre = async (genre?: Genre) => {
    try {
      const response = await fetch("/api/edit/genre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(genre),
      });
      if (response.ok) {
        window.location.reload();
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error saving genre:", error);
    }
  };

  const deleteGenre = async (genre?: Genre) => {
    try {
      const response = await fetch("/api/delete/genre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(genre),
      });
      console.log(response);
    } catch (error) {
      console.error("Error deleting genre:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white p-6 rounded shadow-md"
        onClick={(e) => e.stopPropagation()} // Do not trigger blank click event in this div.
      >
        <h2 className="text-2xl font-semibold">{genre.name}</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              defaultValue={genre.name}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                newGenre = { id: genre.id, name };
                saveGenre(newGenre);
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                deleteGenre(genre);
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

export default GenrePopUp;
