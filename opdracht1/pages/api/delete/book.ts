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
