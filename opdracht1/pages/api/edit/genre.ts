import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id, name } = req.body;

    try {
      await prisma.genre.update({
        where: {
          id: id,
        },
        data: {
          id: id,
          name: name,
        },
      });

      res.status(201).json({ message: "Genre updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating genre" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
