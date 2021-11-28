import React, { ChangeEvent, FC, useState } from 'react';
import './Checkbox.scss';

export interface CheckboxProps {
  checked?: boolean;
  checkShape?: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked = false, checkShape, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange(e.target.checked)
  }

  return (
    <div className={`checkbox-component${checkShape ? ' check-shape' : ''}`}>
      <input
        type='checkbox'
        onChange={handleChange}
        checked={isChecked}
      />
    </div>
  );
};

export default Checkbox;
