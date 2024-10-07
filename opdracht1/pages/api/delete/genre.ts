import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const genreId = req.body.id;
    // First create a new genre with id 999 and name "No Genre"
    try {
      await prisma.genre.upsert({
        where: {
          id: 999,
        },
        update: {}, // No need to update anything if genre already exists
        create: {
          id: 999,
          name: "No Genre",
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating no-genre genre" });
    }
    // Update all books with genreId to genreId 999
    try {
      await prisma.book.updateMany({
        where: {
          genreId: genreId,
        },
        data: {
          genreId: 999,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error removing books from genre" });
    }
    // Remove genre with genreId
    try {
      await prisma.genre.delete({
        where: {
          id: genreId,
        },
      });

      res.status(201).json({ message: "Genre removed" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error removing genre" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
