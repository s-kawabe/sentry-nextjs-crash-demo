import { AppShell as MtAppShell, Button, Footer, Group, Header, Modal, Navbar, Space } from '@mantine/core'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import { forwardRef } from 'react'

import { NavButton } from '@/components/ui/NavButton'

type Props = {
  children: ReactNode
}

export const AppShell: FC<Props> = ({ children }) => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <MtAppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={'100%'} p="xs">
            <Buttons />
            <Space h="lg" />
            <Button
              className="w-20"
              onClick={() => {
                return setOpened(true)
              }}
            >
              ？
            </Button>
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
      <Modal
        size={'600px'}
        opened={opened}
        onClose={() => {
          return setOpened(false)
        }}
        title="description"
      >
        1. browser → API → success
        <br />
        2. getServerSideProps → API → browser → success → browser
        <br />
        3. getStaticProps → API → browser → success → browser <br />
        4. getStaticProps(ISR) → API → browser → success → browser <br />
        5. browser → API → failure <br />
        6. browser → API Routes → API → failure → browser
        <br />
        7. getServerSideProps → API → failure → browser <br />
        8. getServerSideProps → API Routes → API → failure → browser <br />
        {/* 9. getStaticProps → API → failure → browser <br /> */}
        {/* 10. getStaticProps(ISR) → API → failure → browser <br /> */}
      </Modal>
    </>
  )
}

const Buttons: FC = () => {
  return (
    <Group spacing={'md'} className="flex flex-col">
      <Link href={'/safe-csr'}>
        <NavButton targetPath={'/safe-csr'} className="w-full">
          1. safe-csr
        </NavButton>
      </Link>

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
      {/* <Link href={'/unsafe-ssg'}>
        <NavButton targetPath={'/unsafe-ssg'} className="w-full">
          9. unsafe-ssg
        </NavButton>
      </Link>
      <Link href={'/unsafe-isr'}>
        <NavButton targetPath={'/unsafe-isr'} className="w-full">
          10. unsafe-isr
        </NavButton>
      </Link> */}
    </Group>
  )
}

const LinkButton = forwardRef<HTMLAnchorElement, { label: string; path: string }>(({ label, path }, ref) => {
  return (
    <Link href={path} ref={ref}>
      <NavButton targetPath={path} className="w-full">
        {label}
      </NavButton>
    </Link>
  )
})
LinkButton.displayName = 'LinkButton'
