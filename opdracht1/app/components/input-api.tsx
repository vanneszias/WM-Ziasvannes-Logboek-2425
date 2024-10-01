import React, { useState } from "react";

const InputApi: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // Update the input value
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: inputValue }),
    });
    const outputDiv = document.getElementById("api-output");
    if (outputDiv) {
      outputDiv.innerText = `Send POST req with value: ${inputValue}`;
    }
    setInputValue(""); // Reset the input value
  };

  return (
    // Input form for the API
    <form onSubmit={handleSubmit} className="flex justify-between">
      <input
        className="p-2 mr-5 rounded-xl"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter ID"
      />
      <button
        type="submit"
        className="rounded-xl p-3 bg-slate-200 hover:bg-slate-900 hover:text-slate-300"
      >
        Go
      </button>
    </form>
  );
};

export default InputApi;
