import { useMediaQuery as useMediaQueryMantine } from '@mantine/hooks'

import { breakpoints } from '@/utils/token'

export const useMediaQuery = (
  query: keyof typeof breakpoints,
  initialValue: Parameters<typeof useMediaQueryMantine>[1] = true
): boolean => {
  return useMediaQueryMantine(`(min-width: ${breakpoints[query]})`, initialValue)
}
