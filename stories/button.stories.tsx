import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '../src/button'

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'ALou',
  variant: 'primary',
}
