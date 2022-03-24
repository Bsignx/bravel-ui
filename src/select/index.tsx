import React, {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'

import { cls } from '../utils/helpers'

export type Option = {
  value: string
  label: string
}

export type SelectProps = {
  options: Option[]
  label?: string
  name?: string
  error?: string
  onValueChange?: (value: string) => void
  wrapperClassName?: string
} & InputHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options = [],
      onValueChange,
      label = '',
      name = '',
      wrapperClassName,
      error
      ...props
    },
    ref
  ) => {
    const [selected, setSelected] = useState<Option>(options[0])

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target

      setSelected(
        options.find((option) => option.value === value) || options[0]
      )
      onValueChange && onValueChange(value)
    }

    return (
      <div className={cls(`${wrapperClassName}`)}>
        {label && (
          <label htmlFor={name} className="mb-2 block text-base text-gray-900">
            {label}
          </label>
        )}
        <select
          {...(onValueChange
            ? { onChange: handleChange, value: selected.value }
            : {})}
          name={name}
          id={name}
          {...props}
          className={cls(
            `focus:ring-primary-500 focus:border-primary-500 block w-40 rounded border border-gray-50 bg-white py-2 px-3 text-gray-700 shadow focus:outline-none  md:w-52 ${props.className}`
          )}
          ref={ref}
        >
          {options?.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {!!error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    )
  }
)
