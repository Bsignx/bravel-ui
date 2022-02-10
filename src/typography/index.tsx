import React, { PropsWithChildren, HtmlHTMLAttributes } from 'react'

import { cls } from '../utils/helpers'

const classes = {
  color: {
    dark: 'text-gray-900',
    light: 'text-gray-50',
  },
  variant: {
    body2: 'text-base',
    body1: 'text-xl',
    subheading: 'text-2xl',
    h3: 'text-4xl',
    h2: 'text-5xl',
    h1: 'text-6xl',
  },
}

enum TypographyVariants {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  subheading = 'h6',
  body1 = 'p',
  body2 = 'p',
}

export type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'subheading' | 'body1' | 'body2'
  color?: 'dark' | 'light'
} & HtmlHTMLAttributes<HTMLElement>

export const Typography = ({
  variant = 'body2',
  color = 'dark',
  className = '',
  children,
  ...props
}: PropsWithChildren<TypographyProps>) => {
  const Component = variant && TypographyVariants[variant || 'body2']

  return (
    <Component
      className={cls(`
        ${classes.color[color]}
        ${classes.variant[variant]}
        ${className}
      `)}
      {...props}
    >
      {children}
    </Component>
  )
}
