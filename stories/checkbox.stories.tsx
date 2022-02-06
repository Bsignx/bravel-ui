import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Checkbox, CheckboxProps } from '../src/checkbox'

const meta: Meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<CheckboxProps> = () => (
  <div className="flex flex-col items-start gap-2">
    <Checkbox
      label="unchecked checkbox input"
      labelFor="unchecked checkbox input"
    />
    <Checkbox
      label="checked checkbox input"
      labelFor="checked unchecked checkbox input"
      isChecked
    />
    <Checkbox
      label="disabled unchecked checkbox input"
      labelFor="disabled unchecked checkbox input"
      disabled
    />
    <Checkbox
      label="disabled checked checkbox input"
      labelFor="disabled checked checkbox input"
      isChecked
      disabled
    />
  </div>
)

export const states = Template.bind({})
