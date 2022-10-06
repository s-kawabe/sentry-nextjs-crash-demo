import { Alert, Center, Loader, SimpleGrid } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Card } from '@/components/ui/Card'
import { day } from '@/libs/day'
import { useApiRoutePosts } from '@/usecases/post'

const TopPage: NextPage = () => {
  const [time, setTime] = useState('')
  const { data, isLoading } = useApiRoutePosts()

  useEffect(() => {
    // const randomTime = ~~(Math.random() * (1001 - 100)) + 100
    setTime(day().tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss'))
  }, [])

  return (
    <>
      <Head>
        <title>Sentry Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center className="flex-col gap-4 w-auto h-auto">
        {isLoading ? (
          <Loader variant="dots" size={'xl'} />
        ) : (
          <>
            <Alert>This page CSR, renderd at {time}</Alert>
            <SimpleGrid cols={3} spacing="xl">
              {data &&
                data.map((post) => {
                  return <Card key={post.id} {...post} />
                })}
            </SimpleGrid>
          </>
        )}
      </Center>
    </>
  )
}

export default TopPage
