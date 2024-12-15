import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  // const { name, email } = req.body;

  const data = [
    {
      name: 'ホリスライ',
      username: 'nondd_vamsddle',
      usertype: 'business',
      interests: '瞑想, 瞑想, 自然農, エステ, メイク, 心理療法, 数秘, 禅タロット, 哲学'
    },
  ]

  const follower = await prisma.user.update({
    where: { id: 1 },
    data: {
      followers: {
        create: data
      }
    },
  })

  res.status(200).json(follower)
}