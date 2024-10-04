import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const bookId = req.body;
    try {
      await prisma.book.delete({
        where: {
          id: bookId,
        },
      });

      res.status(201).json({ message: "Book removed" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error removing book" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
