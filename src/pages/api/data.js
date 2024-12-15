import { hash } from 'bcrypt'
import prisma from '@/lib/prisma'

export default async function handler(req, res) {

  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);

  } else if (req.method === 'POST') {
    const { name } = req.body;

    try {
      const user = await prisma.user.create({
        data: { name },
      });
      
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create user' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}