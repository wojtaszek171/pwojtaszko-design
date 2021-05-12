import React, { FC, useEffect, useState } from 'react';
import './Toggle.scss';

interface ToggleProps {
  round?: boolean;
  checked?: boolean;
  label?: string;
  onClick?: Function;
}

const Toggle: FC<ToggleProps> = ({ round = true, onClick, checked = false, label }) => {

  const [isChecked, setIsChecked] = useState(checked);

  const handleOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    onClick && onClick(e.target.checked);
  }
  
  useEffect(() => {
    setIsChecked(checked);
  }, [checked])

  return (
    <div className="pwd-toggle-component">
      <label className="pwd-toggle-content">
        <span className="pwd-label">{label}</span>
        <div className="pwd-switch">
          <input type="checkbox" onChange={handleOnClick} checked={isChecked}/>
          <span className={`pwd-slider ${round && 'pwd-round'}`}></span>
        </div>
      </label>
    </div>
  );
}

export default Toggle;
