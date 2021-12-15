import React from 'react';
import { InputTypes } from 'enums';

type InputProps = {
  disabled?: boolean;
  id: string;
  label: string;
  max?: string;
  min?: string;
  setValue: (e: string) => void;
  step?: string;
  type: InputTypes;
  value: string;
};

function Input({
  disabled = false,
  id,
  label,
  max = '',
  min = '',
  setValue,
  step = '',
  type,
  value = '',
}: InputProps) {
  return (
    <div className="relative w-full sm:w-1/2 p-3 py-2 my-2">
      <input
        className="peer placeholder-transparent disabled:bg-gray-400 disabled:text-gray-300"
        id={id}
        type={type}
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          setValue((e.target as HTMLInputElement).value);
        }}
        placeholder={label}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className="
          -top-3
          absolute
          left-1
          peer-focus:-top-3
          peer-focus:left-1
          peer-focus:text-gray-400
          peer-focus:text-sm
          peer-placeholder-shown:left-6
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-600
          peer-placeholder-shown:top-4
          text-gray-400
          text-sm
          transition-all
          disabled:text-gray-100
          "
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
