import type { FC, ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

type ErrorFallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallback: FC<ErrorFallbackProps> = (props) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary}>Try again</button>
    </div>
  )
}

type LayoutErrorBoundaryProps = {
  children: ReactNode
}

// unused (_error.page.tsxがあればErrorBoundaryは不要？)
export const LayoutErrorBoundary: FC<LayoutErrorBoundaryProps> = (props) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {props.children}
    </ErrorBoundary>
  )
}
