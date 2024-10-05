import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import BooksList from "./book";
import AuthorsList from "./author";
import GenresList from "./genre";

import Book from "./book.svg";
import Author from "./author.svg";
import Genre from "./genre.svg";

import AddBook from "../add/book";
import AddAuthor from "../add/author";
import AddGenre from "../add/genre";

export default function List() {
  return (
    <div className="flex w-full flex-col items-center">
      <Tabs aria-label="Options">
        <Tab
          key="books"
          title={
            <div className="flex items-center w-full mx-4 space-x-2">
              <Image src={Book} alt="Book" width={24} height={24} />
              <span>Books</span>
            </div>
          }
          className="w-full"
        >
          <Card>
            <CardBody className="space-y-4">
              <BooksList />
              <AddBook />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="authors"
          title={
            <div className="flex items-center w-full mx-4 space-x-2">
              <Image src={Author} alt="Author" width={24} height={24} />
              <span>Authors</span>
            </div>
          }
          className="w-full"
        >
          <Card>
            <CardBody className="space-y-4">
              <AuthorsList />
              <AddAuthor />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="genres"
          title={
            <div className="flex items-center w-full mx-4 space-x-2">
              <Image src={Genre} alt="Genres" width={24} height={24} />
              <span>Genres</span>
            </div>
          }
          className="w-full"
        >
          <Card>
            <CardBody className="space-y-4">
              <GenresList />
              <AddGenre />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
