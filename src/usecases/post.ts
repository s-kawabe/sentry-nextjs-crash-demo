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

export const getPosts = async (apiClients: ApiClients): Promise<Post[]> => {
  const res = await apiClients.apiClient.get<Post[]>('/posts')
  return res.data
}

export const getApiRoutePosts = async (apiClients: ApiClients): Promise<Post[]> => {
  const res = await apiClients.apiRoutesClient.get<Post[]>('/posts')
  return res.data
}

export const usePosts = (): UseQueryResult<Post[], unknown> => {
  const apiClient = useApiClients()
  return useQuery([queryKeys.posts], () => {
    return getPosts(apiClient)
  })
}

export const useApiRoutePosts = (): UseQueryResult<Post[], unknown> => {
  const apiClient = useApiClients()
  return useQuery([queryKeys.posts], () => {
    return getApiRoutePosts(apiClient)
  })
}
