import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { createContext, useContext } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'
const API_ROUTES_BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

// api client
export type ApiClientOptions = Omit<AxiosRequestConfig, 'baseURL'>
export type ApiClients = {
  apiRoutesClient: AxiosInstance
  apiClient: AxiosInstance
}

export const createApiClient = ({ headers, ...rest }: ApiClientOptions = {}): ApiClients => {
  const apiRoutesClient = axios.create({
    baseURL: API_ROUTES_BASE_URL,
    headers: headers ?? defaultHeaders,
    ...rest,
  })
  const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: headers ?? defaultHeaders,
    ...rest,
  })

  return { apiRoutesClient, apiClient }
}

// provider for api client
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ApiClientContext = createContext<ApiClients>(null as any)

export const useApiClients = (): ApiClients => {
  const apiClients = useContext(ApiClientContext)

  return apiClients
}
