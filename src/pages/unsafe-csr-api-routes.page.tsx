import { Alert, Center, SimpleGrid } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Card } from '@/components/ui/Card'
import { day } from '@/libs/day'
import { useApiRoutePostsDangerous } from '@/usecases/post'

const TopPage: NextPage = () => {
  const [date, setDate] = useState('')
  const { data, isError } = useApiRoutePostsDangerous()

  useEffect(() => {
    setDate(day().tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss'))
  }, [])

  return (
    <>
      <Head>
        <title>Sentry Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center className="flex-col gap-4 w-auto h-auto">
        {isError ? (
          <Alert color={'red'}>Oops! something went wrong :(</Alert>
        ) : (
          <>
            <Alert>This page CSR(API Routes), renderd at {date}</Alert>
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
