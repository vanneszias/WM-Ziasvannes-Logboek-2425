import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id, title, code, authorId, genreId } = req.body;

    try {
      await prisma.book.update({
        where: {
          id: id,
        },
        data: {
          id: id,
          title: title,
          code: code,
          authorId: authorId,
          genreId: genreId,
        },
      });

      res.status(201).json({ message: "Book updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating book" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
