import React, { useState } from "react";

const AddAuthor: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  let firstName = "";
  let lastName = "";
  let birthYear = "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newAuthor = { firstName, lastName, birthYear: Number(birthYear) };
    try {
      const response = await fetch("/api/create/author", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAuthor),
      });
      // Reload the page to see the new author
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

  const AuthorForm: React.FC = () => (
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
            id="firstName"
            placeholder="Enter first name"
            onChange={(e) => (firstName = e.target.value)}
            required
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            placeholder="Enter last name"
            onChange={(e) => (lastName = e.target.value)}
            required
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="number"
            id="birthYear"
            placeholder="Enter birth year"
            onChange={(e) => (birthYear = e.target.value)}
            required
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-slate-900 text-white p-2 rounded">
            Add Author
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      <button
        onClick={toggleFormVisibility}
        className="bg-slate-600 p-3 mx-1 w-full rounded text-slate-100 hover:bg-slate-800"
      >
        {isFormVisible ? "Hide" : "Add"} Author
      </button>
      {isFormVisible && <AuthorForm />}
    </div>
  );
};

export default AddAuthor;
