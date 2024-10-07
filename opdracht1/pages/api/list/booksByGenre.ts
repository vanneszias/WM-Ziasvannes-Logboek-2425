import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const genreId = req.body.id;
    const books = await prisma.book.findMany({
      where: {
        genreId: genreId,
      },
    });
    if (books.length === 0) {
      res.status(204).end();
      return;
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books", message: error });
  } finally {
    await prisma.$disconnect();
  }
}
