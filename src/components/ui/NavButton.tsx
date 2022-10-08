import type { ButtonProps } from '@mantine/core'
import { Button } from '@mantine/core'
import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'
import { forwardRef } from 'react'

type Props = {
  targetPath: string
  children: ReactNode
} & ButtonProps

export const NavButton: FC<Props> = forwardRef<HTMLButtonElement, Props>(({ targetPath, children, ...rest }, ref) => {
  const router = useRouter()

  if (router.asPath === targetPath) {
    return (
      <Button color={'cyan'} ref={ref} {...rest}>
        {children}
      </Button>
    )
  }

  return (
    <Button color={'gray'} ref={ref} {...rest}>
      {children}
    </Button>
  )
})
NavButton.displayName = 'NavButton'
