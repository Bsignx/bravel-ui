import React from 'react'

import { Typography } from '.'
import { render, screen } from '../utils/test/custom-render'

describe('typography', () => {
  it('renders without crashing', () => {
    render(<Typography variant="h1">Heading 1</Typography>)

    expect(screen.getByText('Heading 1')).toBeInTheDocument()
  })

  it('renders variants correctly', () => {
    render(
      <div className="flex flex-col items-start gap-2">
        <Typography variant="h1" color="light">
          Heading 1
        </Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="subheading">Subheading 2</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
      </div>
    )

    expect(screen.getByText('Heading 1')).toBeInTheDocument()
    expect(screen.getByText('Heading 1')).toHaveClass('text-gray-50')
    expect(screen.getByText('Heading 2')).toBeInTheDocument()
    expect(screen.getByText('Heading 2')).toHaveClass('text-gray-900')
    expect(screen.getByText('Heading 3')).toBeInTheDocument()
    expect(screen.getByText('Subheading 2')).toBeInTheDocument()
    expect(screen.getByText('Body 1')).toBeInTheDocument()
    expect(screen.getByText('Body 2')).toBeInTheDocument()
  })
})
