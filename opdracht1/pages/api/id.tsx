import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Received method:", req.method); // Log request method

  if (req.method === "POST") {
    const id = req.body;
    try {
      res.status(201).json("Id is: " + id);
    } catch (error) {
      res.status(500).json({ error: "Internal error", message: error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
