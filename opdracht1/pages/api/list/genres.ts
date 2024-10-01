import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const genre = await prisma.genre.findMany();
    if (genre.length === 0) {
      res.status(204).json({ error: "Genres not found" });
      return;
    }
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch genres", message: error });
  } finally {
    await prisma.$disconnect();
  }
}
