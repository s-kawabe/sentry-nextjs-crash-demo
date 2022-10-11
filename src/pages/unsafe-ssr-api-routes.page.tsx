import { Alert, Center, SimpleGrid } from '@mantine/core'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { Card } from '@/components/ui/Card'
import { day } from '@/libs/day'
import { createApiClient } from '@/libs/jspApiClient'
import type { Post } from '@/usecases/post'
import { getApiRoutePostsDangerous } from '@/usecases/post'

type Props = {
  date: string
  data: Post[]
}

const TopPage: NextPage<Props> = ({ date, data }) => {
  return (
    <>
      <Head>
        <title>Sentry Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center className="flex-col gap-4 w-auto h-auto">
        <>
          <Alert>This page CSR, renderd at {date}</Alert>
          <SimpleGrid cols={3} spacing="xl">
            {data &&
              data.map((post) => {
                return <Card key={post.id} {...post} />
              })}
          </SimpleGrid>
        </>
      </Center>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const apiClient = createApiClient()
  const data = await getApiRoutePostsDangerous(apiClient, 'server(SSR-API-Routes)')

  return {
    props: {
      date: day().tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss'),
      data,
    },
  }
}

export default TopPage
