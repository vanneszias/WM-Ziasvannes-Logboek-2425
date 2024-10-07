import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const authorId = req.body.id;
    // Create a new author with id 999 and name "No Author"
    try {
      await prisma.author.upsert({
        where: {
          id: 999,
        },
        update: {}, // No need to update anything if author already exists
        create: {
          id: 999,
          firstName: "",
          lastName: "No Author",
          birthYear: 0,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating no-author author" });
    }
    // Update all books with authorId to authorId 999
    try {
      await prisma.book.updateMany({
        where: {
          authorId: authorId,
        },
        data: {
          authorId: 999,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error removing books from author" });
    }
    // Remove author with authorId
    try {
      await prisma.author.delete({
        where: {
          id: authorId,
        },
      });
      res.status(201).json({ message: "Author removed" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error removing author" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
