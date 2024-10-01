import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, birthYear } = req.body;
    try {
      const newAuthor = await prisma.author.create({
        data: {
          firstName,
          lastName,
          birthYear,
        },
      });
      res.status(201).json(newAuthor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating author" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
