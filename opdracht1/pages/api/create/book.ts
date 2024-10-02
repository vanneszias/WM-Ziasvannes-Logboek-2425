import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, code, author, genre } = req.body;

    try {
      // Parse author and genre as integers
      const authorId = parseInt(author);
      const genreId = parseInt(genre);

      // Connect author to existing author
      const existingAuthor = await prisma.author.findUniqueOrThrow({
        where: {
          id: authorId,
        },
      });
      // Connect genre to existing genre
      const existingGenre = await prisma.genre.findUniqueOrThrow({
        where: {
          id: genreId,
        },
      });
      console.log(existingAuthor, existingGenre);
      // Create book with existing author and genre
      const newBook = await prisma.book.create({
        data: {
          title,
          code,
          authorId: existingAuthor.id,
          genreId: existingGenre.id,
        },
      });
      res.status(201).json(newBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating book" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
