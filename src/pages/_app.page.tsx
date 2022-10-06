import 'nprogress/nprogress.css'
import '@/styles/global.css'

import { Center, Loader, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import nprogress from 'nprogress'
import { Suspense, useEffect, useMemo } from 'react'

import { AppShell } from '@/components/layout/AppShell'
import { ApiClientContext, createApiClient } from '@/libs/jspApiClient'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 0,
          suspense: true,
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
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ApiClientContext.Provider value={apiClients}>
          <AppShell>
            <Suspense
              fallback={
                <Center className="flex-col  items-center w-auto h-full">
                  <Loader variant="dots" size={'xl'} />
                </Center>
              }
            >
              <Component {...pageProps} />
            </Suspense>
          </AppShell>
        </ApiClientContext.Provider>
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default MyApp
