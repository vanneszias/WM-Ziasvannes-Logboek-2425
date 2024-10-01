import React, { useState } from "react";

const AddAuthor: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthYear, setBirthYear] = useState<number | "">("");

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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="birthYear">Birth Year:</label>
        <input
          type="number"
          id="birthYear"
          value={birthYear}
          onChange={(e) =>
            setBirthYear(e.target.value ? Number(e.target.value) : "")
          }
          required
        />
      </div>
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthor;
