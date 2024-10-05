import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { id, firstName, lastName, birthYear } = req.body;

    try {
      await prisma.author.update({
        where: {
          id: id,
        },
        data: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          birthYear: birthYear,
        },
      });

      res.status(201).json({ message: "Author updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating author" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
