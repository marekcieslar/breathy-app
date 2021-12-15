import React from 'react';

type CheckboxProps = {
  checked: boolean;
  id: string;
  label: string;
  onChange: (e: boolean) => void;
};

function Checkbox({ checked, id, label, onChange }: CheckboxProps) {
  return (
    <div className="relative flex align-middle w-full sm:w-1/2 p-3 py-2 my-2">
      <input
        type="checkbox"
        className="
          border-b-2
          h-5
          rounded
          w-5
          bg-gray-100
        border-gray-500
        focus:ring-gray-500
        focus:text-gray-500
        text-gray-500
        "
        defaultChecked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="text-gray-500 ml-3">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
