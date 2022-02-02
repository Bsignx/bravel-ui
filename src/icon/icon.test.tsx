import React from 'react'

import { render, screen } from 'utils/test/custom-render'

import { Icon } from '.'

describe('icon', () => {
  it('renders without crashing', () => {
    render(<Icon name="basketball" />)

    expect(screen.getByTestId('basketball-icon')).toBeInTheDocument()
  })

  it('return nothing when name prop not passed', () => {
    render(<Icon />)

    expect(screen.queryByTestId('basketball-icon')).not.toBeInTheDocument()
  })
})
