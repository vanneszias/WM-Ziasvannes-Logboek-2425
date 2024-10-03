"use client";
import AddBook from "./components/add/book";
import AddAuthor from "./components/add/author";
import AddGenre from "./components/add/genre";

import BooksList from "./components/list/book";
import AuthorsList from "./components/list/author";
import GenresList from "./components/list/genre";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <div className="text-justify space-y-5 bg-slate-400 p-10 w-2/3 min-w-[450px] max-w-[800px] h-2/3 min-h-[400px] rounded-xl shadow-2xl">
        <h1 className="text-center p-4 text-slate-800">
          Opdracht 1 - API interface
        </h1>
        <div className="flex justify-between">
          <AddBook />
          <div className="flex">
            <AddAuthor />
            <AddGenre />
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow-md" id="add-book-output">
          <BooksList />
        </div>
        <div className="bg-white p-4 rounded shadow-md" id="author-list">
          <AuthorsList />
        </div>
        <div className="bg-white p-4 rounded shadow-md" id="genre-list">
          <GenresList />
        </div>
      </div>
    </div>
  );
}
