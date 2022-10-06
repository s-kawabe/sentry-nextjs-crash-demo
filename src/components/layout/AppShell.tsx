import { AppShell as MtAppShell, Footer, Group, Header, Navbar, Tooltip } from '@mantine/core'
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
          <Buttons />
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

const Buttons: FC = () => {
  return (
    <Group spacing={'md'} className="flex flex-col">
      <Tooltip label="browser→API" position="right">
        <Link href={'/safe-csr'} passHref>
          <NavButton targetPath={'/safe-csr'} className="w-full">
            1. safe-csr
          </NavButton>
        </Link>
      </Tooltip>
      <Link href={'/safe-ssr'}>
        <NavButton targetPath={'/safe-ssr'} className="w-full">
          2. safe-ssr
        </NavButton>
      </Link>
      <Link href={'/safe-ssg'}>
        <NavButton targetPath={'/safe-ssg'} className="w-full">
          3. safe-ssg
        </NavButton>
      </Link>
      <Link href={'/safe-isr'}>
        <NavButton targetPath={'/safe-isr'} className="w-full">
          4. safe-isr
        </NavButton>
      </Link>
      <Link href={'/unsafe-csr'}>
        <NavButton targetPath={'/unsafe-csr'} className="w-full">
          5. unsafe-csr
        </NavButton>
      </Link>
      <Link href={'/unsafe-csr-api-routes'}>
        <NavButton targetPath={'/unsafe-csr-api-routes'} className="w-full">
          6. unsafe-csr(via api routes)
        </NavButton>
      </Link>
      <Link href={'/unsafe-ssr'}>
        <NavButton targetPath={'/unsafe-ssr'} className="w-full">
          7. unsafe-ssr
        </NavButton>
      </Link>
      <Link href={'/unsafe-ssr-api-routes'}>
        <NavButton targetPath={'/unsafe-ssr-api-routes'} className="w-full">
          8. unsafe-ssr(via api routes)
        </NavButton>
      </Link>
      <Link href={'/unsafe-ssg'}>
        <NavButton targetPath={'/unsafe-ssg'} className="w-full">
          9. unsafe-ssg
        </NavButton>
      </Link>
      <Link href={'/unsafe-isr'}>
        <NavButton targetPath={'/unsafe-isr'} className="w-full">
          10. unsafe-isr
        </NavButton>
      </Link>
    </Group>
  )
}
