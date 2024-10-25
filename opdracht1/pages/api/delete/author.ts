import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  origin: "*",
  credentials: true,
});

// Helper method to wait for a middleware to execute before continuing
interface MiddlewareFunction {
  (
    req: NextApiRequest,
    res: NextApiResponse,
    callback: (result: unknown) => void
  ): void;
}

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: MiddlewareFunction
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result as void);
    });
  });
}

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  await runMiddleware(req, res, cors);

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
