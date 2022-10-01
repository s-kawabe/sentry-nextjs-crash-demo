// import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { Top } from '@/components/page/Top/Top'

describe('Top page test', () => {
  test('rendering test', () => {
    render(<Top />)
    expect(screen.getByText('test text')).toBeTruthy()
  })
})
