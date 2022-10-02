import 'nprogress/nprogress.css'
import '@/styles/global.css'

import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import nprogress from 'nprogress'
import { useEffect, useMemo } from 'react'

import { ApiClientContext, createApiClient } from '@/libs/jspApiClient'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
        },
      },
    })
  }, [])
  const apiClients = useMemo(createApiClient, [])

  if (typeof window !== 'undefined') {
    nprogress.start()
  }
  useEffect(() => {
    nprogress.done()
  })

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <ApiClientContext.Provider value={apiClients}>
          <Component {...pageProps} />
        </ApiClientContext.Provider>
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default MyApp
