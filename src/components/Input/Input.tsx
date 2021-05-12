import React, { FC, useEffect, useState } from 'react';
import './Input.scss';

interface InputProps {
  disabled?: boolean;
  label: string;
  value?: any;
  type?: string;
  autocomplete?: string;
  placeholder?: string;
  onChange?: Function;
}

const Input: FC<InputProps> = ({ disabled, onChange, value = '', label, placeholder, type = 'text', autocomplete }) => {

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInputValue(val)
    onChange && onChange(val)
  }

  return (
    <div className="text-input">
      {label && <label>{label}</label>}
      <input
        disabled={disabled}
        type={type}
        name="lastname"
        onChange={handleOnChange}
        value={inputValue}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </div>
  );
}

export default Input;
