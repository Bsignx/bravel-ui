import React from 'react'

import { Button } from '.'
import { render, screen } from '../utils/test/custom-render'

const buttonText = 'Test Button'

describe('button', () => {
  it('renders without crashing', () => {
    render(<Button>{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  it('renders variants correctly', () => {
    const { rerender } = render(<Button variant="primary">{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toHaveClass('bg-gray-900')

    rerender(<Button variant="secondary">{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toHaveClass('bg-transparent')

    rerender(<Button variant="tertiary">{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toHaveClass('bg-transparent')
  })

  it('renders sizes correctly', () => {
    render(<Button size="medium">{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toHaveClass('px-4 h-10')
  })

  it('renders fullWidth correctly', () => {
    render(<Button fullWidth>{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toHaveClass('w-full')
  })

  it('renders with icon correctly', () => {
    render(<Button icon={<span>icon</span>}>{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toHaveClass(
      'flex items-center justify-center gap-2'
    )
  })

  it('renders disabled correctly', () => {
    render(<Button disabled>{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toHaveClass(
      'opacity-50 cursor-not-allowed'
    )
  })

  it('renders plain correctly', () => {
    render(<Button plain>{buttonText}</Button>)

    expect(screen.getByText(buttonText)).toHaveClass(
      'bg-transparent border-none hover:text-rose-500 hover:border-none'
    )
  })
})
