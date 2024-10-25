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
