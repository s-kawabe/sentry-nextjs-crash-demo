export const pagesPath = {
  post: {
    $url: (url?: { hash?: string }) => {
      return { pathname: '/post' as const, hash: url?.hash }
    },
  },
  $url: (url?: { hash?: string }) => {
    return { pathname: '/' as const, hash: url?.hash }
  },
}

export type PagesPath = typeof pagesPath
