import React from "react";

interface InputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  textArea?: boolean;
  numberOfRows?: number;
}

const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  label,
  textArea = false,
  numberOfRows = 5,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    onChange(value);
  };

  const baseClassName = `
    w-full px-4 py-3.5
    text-neutral-900 placeholder-neutral-400
    bg-white border border-neutral-200
    rounded-xl
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    transition-all duration-200
    text-base
  `;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
        </label>
      )}
      {textArea ? (
        <textarea
          className={baseClassName}
          placeholder={placeholder}
          rows={numberOfRows}
          onChange={handleChange}
        />
      ) : (
        <input
          type="text"
          className={baseClassName}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Input;
