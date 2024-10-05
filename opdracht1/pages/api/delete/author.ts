import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const authorId = req.body;
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
