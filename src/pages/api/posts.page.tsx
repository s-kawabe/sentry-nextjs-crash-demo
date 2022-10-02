import type { NextApiRequest, NextApiResponse } from 'next'

import { createApiClient } from '@/libs/jspApiClient'
import { getPosts } from '@/usecases/post'

const getPostsHandler = async (_req: NextApiRequest, _res: NextApiResponse) => {
  console.log('🅰️ executed get posts api route :) ')

  const apiClients = createApiClient()
  const posts = await getPosts(apiClients)

  _res.status(200).json(posts)
}

export default getPostsHandler
