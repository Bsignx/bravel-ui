import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

import { cls } from '../utils/helpers'

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300 rounded font-medium',
  variant: {
    primary:
      'bg-gray-900 hover:bg-rose-500 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 text-gray-50',
    secondary:
      'bg-transparent border-solid border-zinc-300 border hover:border-rose-500 hover:text-rose-500 focus:ring-2 focus:ring-gray-500 text-gray-900',
    tertiary:
      'bg-transparent border-solid border-gray-500 border hover:border-rose-500 hover:text-rose-500 focus:ring-2 focus:ring-gray-500 text-gray-50',
  },
  disabled: 'opacity-50 cursor-not-allowed',
  fullWidth: 'w-full',
  plain:
    'bg-transparent border-none hover:text-rose-500 hover:bg-transparent hover:border-none',
  size: {
    medium: 'px-4 h-10',
  },
  withIcon: 'flex items-center justify-center gap-2',
}

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'medium'
  icon?: ReactNode
  fullWidth?: boolean
  plain?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'medium',
      icon = null,
      fullWidth = false,
      disabled = false,
      plain = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={cls(`
        ${classes.base}
        ${classes.size[size]}
        ${classes.variant[variant]}
        ${disabled && classes.disabled}
        ${!!icon && classes.withIcon}
        ${fullWidth && classes.fullWidth}
        ${plain && classes.plain}
        ${className}
      `)}
      {...props}
    >
      {!!icon && icon} {children}
    </button>
  )
)
