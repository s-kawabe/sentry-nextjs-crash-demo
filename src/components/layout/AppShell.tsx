import { AppShell as MtAppShell, Button, Footer, Group, Header, Navbar } from '@mantine/core'
import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const AppShell: FC<Props> = ({ children }) => {
  return (
    <MtAppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={'100%'} p="xs">
          <Group spacing={'md'} className="flex flex-col">
            <Button className="w-full">No Error</Button>
            <Button className="w-full">Cliend Error</Button>
            <Button className="w-full">Server Error</Button>
          </Group>
        </Navbar>
      }
      header={
        <Header height={60} p="xs" className="flex justify-start items-center text-xl font-bold text-gray-800">
          Sentry Demo App :)
        </Header>
      }
      footer={
        <Footer height={80} p="md" className="flex justify-start items-center text-gray-700">
          Copyright © 2000-2017 ABC inc. All Right Reserved.
        </Footer>
      }
      styles={(theme) => {
        return {
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        }
      }}
    >
      {children}
    </MtAppShell>
  )
}
