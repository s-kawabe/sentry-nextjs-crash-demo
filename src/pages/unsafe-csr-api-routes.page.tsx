import { Alert, Center, Loader } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Suspense, useEffect, useState } from 'react'

import { PostsGrid } from '@/components/post/PostsGrid'
import { day } from '@/libs/day'

const TopPage: NextPage = () => {
  const [date, setDate] = useState('')

  useEffect(() => {
    setDate(day().tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss'))
  }, [])

  return (
    <>
      <Head>
        <title>Sentry Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense
        fallback={
          <Center className="flex-col items-center w-auto h-full">
            <Loader variant="dots" size={'xl'} />
          </Center>
        }
      >
        <Center className="flex-col gap-4 w-auto h-auto">
          <Alert>This page CSR(API Routes), renderd at {date}</Alert>
          <PostsGrid type="unsafe-csr-api-routes" />
        </Center>
      </Suspense>
    </>
  )
}

export default TopPage
