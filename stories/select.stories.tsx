import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Select, SelectProps } from '../src/select'

const meta: Meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const options = [
  {
    label: 'Option 1',
    value: 'option-1',
  },
]

const Template: Story<SelectProps> = () => (
  <div className="flex flex-col items-start gap-2">
    <div className="w-72">
      <Select
        label="select input"
        name="select input"
        options={options}
        onValueChange={() => null}
      />
    </div>
  </div>
)

export const states = Template.bind({})
