import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Icon, IconProps } from '../src/icon'

const meta: Meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<IconProps> = () => (
  <div className="flex flex-col items-start gap-2">
    <Icon name="basketball" />
    <Icon name="soccer" />
    <Icon name="rugby" />
    <Icon name="esports" />
    <Icon name="tennis" />
    <Icon name="volleyball" />
    <Icon name="yoga" />
    <Icon name="running" />
    <Icon name="skateboard" />
    <Icon name="golf" />
    <Icon name="mma" />
    <Icon name="bike" />
  </div>
)

export const list = Template.bind({})
