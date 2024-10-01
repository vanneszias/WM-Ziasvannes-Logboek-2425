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
      const newAuthor = await prisma.author.create({
        data: {
          firstName: author,
          lastName: "Doe",
          birthYear: 2000,
        },
      });
      const newGenre = await prisma.genre.create({
        data: {
          name: genre,
        },
      });
      const newBook = await prisma.book.create({
        data: {
          title,
          code,
          authorId: newAuthor.id,
          genreId: newGenre.id,
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
