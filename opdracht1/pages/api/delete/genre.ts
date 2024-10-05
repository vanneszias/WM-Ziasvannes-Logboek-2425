import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const genreId = req.body;
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
