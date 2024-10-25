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
    const { title, code, author, genre } = req.body;

    try {
      // Parse author and genre as integers
      const authorId = parseInt(author);
      const genreId = parseInt(genre);

      // Connect author to existing author
      const existingAuthor = await prisma.author.findUniqueOrThrow({
        where: {
          id: authorId,
        },
      });
      // Connect genre to existing genre
      const existingGenre = await prisma.genre.findUniqueOrThrow({
        where: {
          id: genreId,
        },
      });
      console.log(existingAuthor, existingGenre);
      // Create book with existing author and genre
      const newBook = await prisma.book.create({
        data: {
          title,
          code,
          authorId: existingAuthor.id,
          genreId: existingGenre.id,
        },
      });
      res.status(201).json(newBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating book" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
