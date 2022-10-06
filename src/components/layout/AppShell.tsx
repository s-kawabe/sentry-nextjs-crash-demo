import { AppShell as MtAppShell, Footer, Group, Header, Navbar } from '@mantine/core'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

import { NavButton } from '@/components/ui/NavButton'

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
            <Link href={'/safe-csr'}>
              <NavButton targetPath={'/safe-csr'} className="w-full">
                safe-csr
              </NavButton>
            </Link>
            <Link href={'/safe-ssr'}>
              <NavButton targetPath={'/safe-ssr'} className="w-full">
                safe-ssr
              </NavButton>
            </Link>
            <Link href={'/safe-ssg'}>
              <NavButton targetPath={'/safe-ssg'} className="w-full">
                safe-ssg
              </NavButton>
            </Link>
            <Link href={'/safe-isr'}>
              <NavButton targetPath={'/safe-isr'} className="w-full">
                safe-isr
              </NavButton>
            </Link>
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
