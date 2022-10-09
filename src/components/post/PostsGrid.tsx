import { SimpleGrid } from '@mantine/core'
import type { FC } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { useApiRoutePostsDangerous, usePosts, usePostsDangerous } from '@/usecases/post'

import { Card } from '../ui/Card'

type Props = {
  type: 'safe-csr' | 'unsafe-csr' | 'unsafe-csr-api-routes'
}

const getPostsCustomeHooks = (type: Props['type']) => {
  switch (type) {
    case 'safe-csr':
      return usePosts
    case 'unsafe-csr':
      return usePostsDangerous
    case 'unsafe-csr-api-routes':
      return useApiRoutePostsDangerous
  }
}

export const PostsGrid: FC<Props> = ({ type }) => {
  const [isMounted, setIsMounted] = useState(false)
  const usePostsFunc = getPostsCustomeHooks(type)
  const { data } = usePostsFunc(isMounted)

  // mount後にfetchを行わないと以下のエラーが出る
  // Error: This Suspense boundary received an update before it finished hydrating.
  // This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <SimpleGrid cols={3} spacing="xl">
      {data &&
        data.map((post) => {
          return <Card key={post.id} {...post} />
        })}
    </SimpleGrid>
  )
}
