import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

import { cls } from 'utils/helpers/cls'

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300 max-w-min rounded font-medium',
  disabled: 'opacity-50 cursor-not-allowed',
  fullWidth: 'w-full max-w-none',
  size: {
    medium: 'px-4 h-10',
  },
  theme: {
    secondaryDark: 'text-gray-50 border-gray-500',
  },
  withIcon: 'flex items-center justify-center gap-2',
  variant: {
    primary:
      'bg-gray-900 hover:bg-rose-500 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 text-gray-50',
    secondary:
      'bg-transparent border-solid border-zinc-300 border hover:border-rose-500 focus:ring-2 focus:ring-gray-500 text-gray-700',
  },
}

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'medium'
  theme?: 'secondaryDark' | null
  icon?: ReactNode
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'medium',
      theme = null,
      icon,
      fullWidth = false,
      disabled = false,
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
        ${theme && classes.theme[theme]}
        ${disabled && classes.disabled}
        ${fullWidth && classes.fullWidth}
        ${icon && classes.withIcon}
        ${className}

      `)}
      {...props}
    >
      {!!icon && icon} {children}
    </button>
  )
)
