import React from 'react'

const className = 'border p-3 w-full border-gray-200 text-gray-900 opacity-60 rounded-xl appearance-none leading-tight focus:outline-none focus:shadow-outline text-sm'

interface InputProps {
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  textArea?: boolean
  numberOfRows?: number
}

const Input: React.FC<InputProps> = ({ onChange, placeholder, label, textArea = false, numberOfRows = 6 }) => {

  const handleChange = (e) => {
    const value = e.target.value
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
          rows={numberOfRows}
          onChange={handleChange}
        />
        : <input
          type="text"
          className={className}
          placeholder={placeholder}
          onChange={handleChange}
        />}
    </>
  )
}

export default Input