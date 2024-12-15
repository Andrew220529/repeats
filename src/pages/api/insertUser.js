import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

export default async function handler(req, res) {
  const userdata = [
    { name: 'bihokupark' },
    { name: 'cottage_setoro' },
    { name: 'daisu_kitchencars' },
    { name: 'fuudo_etajima' },
    { name: 'gamagori_iju' },
    { name: 'iriser_odaka' },
    { name: 'kunishima_ct' },
    { name: 'kurasutoko' },
    { name: 'maaruigoen' },
    { name: 'sanken_hiroshima' },
    { name: 'shobara_1000' },
    { name: 'shobara_navi' },
    { name: 'toyokawatimes' },
    { name: 'yuki_experience' }
  ]
  // const { name, email } = req.body;

  const user = await prisma.user.createMany({
    data: userdata
  })

  return res.status(200).json(user);
}