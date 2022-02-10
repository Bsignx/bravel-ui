import React, { InputHTMLAttributes, useState } from 'react'

import { cls } from '../utils/helpers'

const inputClasses = {
  base: 'focus:shadow-outline w-full appearance-none rounded border border-gray-50 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none',
  disabled: 'opacity-90 cursor-not-allowed',
  error: 'border-red-500',
}

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const TextField = ({
  onInputChange,
  label,
  name,
  initialValue = '',
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <div className="w-full">
      {!!label && (
        <label className="mb-2 block text-base text-gray-900" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        onChange={handleOnChange}
        value={value}
        className={cls(`
            ${inputClasses.base}
            ${disabled && inputClasses.disabled}
            ${error && inputClasses.error}
          `)}
        name={name}
        type="text"
        disabled={disabled}
        {...(label ? { id: name } : {})}
        {...props}
      />
      {!!error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
