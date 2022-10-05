import { Center, Loader, SimpleGrid } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Card } from '@/components/ui/Card'
import { useApiRoutePosts } from '@/usecases/post'

const TopPage: NextPage = () => {
  const { data, isLoading } = useApiRoutePosts()

  return (
    <div className="flex justify-center items-center h-full">
      <Head>
        <title>Sentry Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center className="flex-col w-auto h-auto">
        {isLoading ? (
          <Loader variant="dots" size={'xl'} />
        ) : (
          <SimpleGrid cols={3} spacing="xl">
            {data &&
              data.map((post) => {
                return <Card key={post.id} {...post} />
              })}
          </SimpleGrid>
        )}
      </Center>
    </div>
  )
}

export default TopPage
