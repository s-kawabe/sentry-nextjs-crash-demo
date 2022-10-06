import type { ButtonProps } from '@mantine/core'
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'

type Props = {
  targetPath: string
  children: ReactNode
} & ButtonProps

export const NavButton: FC<Props> = ({ targetPath, children, ...rest }) => {
  const router = useRouter()

  if (router.asPath === targetPath) {
    return (
      <Button color={'cyan'} {...rest}>
        {children}
      </Button>
    )
  }

  return (
    <Button
      color={'gray'}
      {...rest}
      sx={() => {
        return { '&:hover': { backgroundColor: '#868E96' } }
      }}
    >
      {children}
    </Button>
  )
}
