import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name } = req.body;
        try {
            const newGenre = await prisma.genre.create({
                data: {
                    name,
                },
            });
            res.status(201).json(newGenre);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error creating genre' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
