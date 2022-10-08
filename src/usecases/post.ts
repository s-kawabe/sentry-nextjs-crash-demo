/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import type { ApiClients } from '@/libs/jspApiClient'
import { useApiClients } from '@/libs/jspApiClient'

import { queryKeys } from './constants'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

// safe fatcher
export const getPosts = async (apiClients: ApiClients): Promise<Post[]> => {
  const res = await apiClients.apiClient.get<Post[]>('/posts?_limit=10').then((await sleep(3000)) as any)
  return res.data
}

export const getApiRoutePosts = async (apiClients: ApiClients): Promise<Post[]> => {
  const res = await apiClients.apiRoutesClient.get<Post[]>('/posts').then((await sleep(3000)) as any)
  return res.data
}

export const usePosts = (): UseQueryResult<Post[], unknown> => {
  const apiClient = useApiClients()
  return useQuery(
    [queryKeys.posts, 'api'],
    () => {
      return getPosts(apiClient)
    },
    { suspense: true }
  )
}

export const useApiRoutePosts = (): UseQueryResult<Post[], unknown> => {
  const apiClient = useApiClients()
  return useQuery([queryKeys.posts, 'api routes'], () => {
    return getApiRoutePosts(apiClient)
  })
}

export type RenderPattern = 'client' | 'server(API Routes)' | 'server(SSR, SSG, ISR)'

// artificially error fetcher
export const getPostsDangerous = async (apiClients: ApiClients, context: RenderPattern): Promise<Post[]> => {
  if (Math.random() <= 0.5) throw new Error(`something went wrong :( - get posts error, context: ${context}`)
  const res = await apiClients.apiClient.get<Post[]>('/posts').then((await sleep(3000)) as any)
  return res.data
}

export const getApiRoutePostsDangerous = async (apiClients: ApiClients, context: RenderPattern): Promise<Post[]> => {
  const res = await apiClients.apiClient.get<Post[]>(`/postsUnsafe?context=${context}`).then((await sleep(3000)) as any)
  return res.data
}

export const usePostsDangerous = (): UseQueryResult<Post[], unknown> => {
  const apiClient = useApiClients()
  return useQuery(
    [queryKeys.posts, 'unsafe api'],
    () => {
      return getPostsDangerous(apiClient, 'client').catch((error) => {
        throw error
      })
    },
    {
      onError: (error) => {
        console.error(error)
      },
    }
  )
}

export const useApiRoutePostsDangerous = (): UseQueryResult<Post[], unknown> => {
  const apiClient = useApiClients()
  return useQuery(
    [queryKeys.posts, 'unsafe api routes'],
    () => {
      return getApiRoutePostsDangerous(apiClient, 'server(API Routes)').catch((error) => {
        throw error
      })
    },
    {
      onError: (error) => {
        console.error(error)
      },
    }
  )
}
