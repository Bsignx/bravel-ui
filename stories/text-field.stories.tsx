import React from 'react'

import { Meta, Story } from '@storybook/react'

import { TextField, TextFieldProps } from '../src/text-field'

const meta: Meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TextFieldProps> = () => (
  <div className="flex flex-col items-start gap-2">
    <div className="w-72">
      <TextField label="text input" name="text input" />
    </div>
    <TextField label="full width text input" name="text input" />
    <div className="w-72">
      <TextField label="text input disabled" name="text input" disabled />
    </div>
    <TextField
      label="full width text input disabled"
      name="text input"
      disabled
    />
    <div className="w-72">
      <TextField
        label="text input with error"
        name="text input"
        error="with error"
      />
    </div>
    <TextField
      label="full width text input with error"
      name="text input"
      error="with error"
    />
  </div>
)

export const states = Template.bind({})
