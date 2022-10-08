import type { NextApiRequest, NextApiResponse } from 'next'

import { createApiClient } from '@/libs/jspApiClient'
import { getPosts } from '@/usecases/post'

const getPostsUnsafeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('🅰️ executed get posts unsafe api route :) ')

  const { context } = req.headers

  if (Math.random() <= 0.5) throw new Error(`something went wrong :( - get posts error, context: ${context}`)

  const apiClients = createApiClient()
  const posts = await getPosts(apiClients)

  res.status(500).json(posts)
}

export default getPostsUnsafeHandler
