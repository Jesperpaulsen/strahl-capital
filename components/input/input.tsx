import React, { useState } from 'react'

const className = 'border p-4 w-full border-grey-200 text-grey-900 rounded-xl bg-grey-500 bg-opacity-40 appearance-none leading-tight focus:outline-none focus:shadow-outline text-sm'

interface InputProps {
  initialValue?: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  textArea?: boolean
  numberOfRows?: number
}

const Input: React.FC<InputProps> = ({ initialValue = '', onChange, placeholder, label, textArea = false, numberOfRows = 6 }) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => {
    const value = e.target.value
    setValue(value)
    onChange(value)
  }

  return (
    <>
      <div className="text-xs text-grey-700 pl-1 mb-1">
        {label}
      </div>
      {textArea
        ? <textarea
          className={className}
          placeholder={placeholder}
          value={value}
          rows={numberOfRows}
          onChange={handleChange}
        />
        : <input
          type="text"
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />}
    </>
  )
}

export default Input