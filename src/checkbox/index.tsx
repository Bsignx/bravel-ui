import React, { InputHTMLAttributes, useState } from 'react'

import { cls } from 'utils/helpers/cls'

const checkedIconUrl =
  'https://res.cloudinary.com/my-portfoiio/image/upload/v1644181223/samples/bravel/download_pobybk_4_1_fiipgk.svg'

const classes = {
  base: 'form-check-input appearance-none h-4 w-4 border border-zinc-300 rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer',
  disabled: 'opacity-50 cursor-not-allowed',
}

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  value,
  className = '',
  disabled = false,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <div>
      <input
        id={labelFor}
        type="checkbox"
        style={{
          backgroundImage: `url(${checked ? checkedIconUrl : null})`,
        }}
        className={cls(`
          ${classes.base}
          ${className}
          ${disabled && classes.disabled}
        `)}
        onChange={onChange}
        checked={checked}
        value={value}
        disabled={disabled}
        {...props}
      />
      {!!label && (
        <label
          className="form-check-label inline-block text-gray-700"
          htmlFor={labelFor}
        >
          {label}
        </label>
      )}
    </div>
  )
}
