import { Button, Card as MtCard, Group, Image, Text } from '@mantine/core'
import type { FC } from 'react'

import type { Post } from '@/usecases/post'

type Props = Pick<Post, 'title' | 'body'>

export const Card: FC<Props> = ({ title, body }) => {
  return (
    <MtCard shadow="sm" p="lg" radius="md" withBorder className="w-80">
      <MtCard.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </MtCard.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
      </Group>

      <Text size="sm" color="dimmed">
        {body}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </MtCard>
  )
}
