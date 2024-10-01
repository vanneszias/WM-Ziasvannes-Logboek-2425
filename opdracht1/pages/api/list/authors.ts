import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const author = await prisma.author.findMany();
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch authors', message: error });
    } finally {
        await prisma.$disconnect();
    }
}
