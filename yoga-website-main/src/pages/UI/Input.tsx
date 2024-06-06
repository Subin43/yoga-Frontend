import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  value: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, name, onChange, value, label }) => {
  return (
    <div className="flex flex-col gap-4">
      {label && <label htmlFor={name} className="text-sm font-medium">{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
