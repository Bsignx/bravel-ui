import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Typography, TypographyProps } from '../src/typography'

const meta: Meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TypographyProps> = () => (
  <div className="flex flex-col items-start gap-2">
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="subheading">Subheading 2</Typography>
    <Typography variant="body1">Body 1</Typography>
    <Typography variant="body2">Body 2</Typography>
  </div>
)

export const variants = Template.bind({})
