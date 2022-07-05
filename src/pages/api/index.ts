import type { NextApiResponse } from 'next'

export default async function handler(res: NextApiResponse) {
  res.status(200).json({ joke: 'Hello World' })
}
