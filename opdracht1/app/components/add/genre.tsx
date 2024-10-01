import React, { useState } from "react";

const AddGenre: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  let name = "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newGenre = { name };
    try {
      const response = await fetch("/api/create/genre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGenre),
      });
      // Reload the page to see the new genre
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

  const GenreForm: React.FC = () => (
    <form
      onSubmit={handleSubmit}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={toggleFormVisibility}
    >
      <div
        className="bg-white p-6 rounded shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <input
            type="text"
            id="name"
            placeholder="Enter genre name"
            onChange={(e) => (name = e.target.value)}
            required
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-slate-900 text-white p-2 rounded">
            Add Genre
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      <button onClick={toggleFormVisibility}>
        {isFormVisible ? "Hide" : "Add"} Genre
      </button>
      {isFormVisible && <GenreForm />}
    </div>
  );
};

export default AddGenre;
