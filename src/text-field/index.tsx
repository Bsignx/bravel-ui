import React, { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

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
  inputClassName?: string
  wrapperClassName?: string
  isTextarea?: boolean
  name?: string
} & ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'textarea'>

export const TextField = forwardRef<
  HTMLInputElement & HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      onInputChange,
      label,
      name,
      initialValue = '',
      disabled = false,
      error,
      inputClassName,
      wrapperClassName,
      isTextarea = false,
      ...props
    },
    ref
  ) => {
    const InputElement = isTextarea ? 'textarea' : 'input'

    const [value, setValue] = useState(initialValue)

    const handleOnChange = (
      event: React.ChangeEvent<HTMLInputElement> &
        React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const newValue = event.currentTarget.value
      setValue(newValue)

      !!onInputChange && onInputChange(newValue)
    }

    return (
      <div
        className={cls(`
        w-full
        ${wrapperClassName}
    `)}
      >
        {!!label && (
          <label className="mb-2 block text-base text-gray-900" htmlFor={name}>
            {label}
          </label>
        )}

        <InputElement
          onChange={handleOnChange}
          value={value}
          className={cls(`
            ${inputClasses.base}
            ${disabled && inputClasses.disabled}
            ${error && inputClasses.error}
            ${inputClassName}
          `)}
          name={name}
          type="text"
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
          ref={ref}
        />
        {!!error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    )
  }
)
