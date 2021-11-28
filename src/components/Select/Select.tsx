import React, { FC, ReactElement, useState } from 'react';
import './Select.scss';

export interface SelectOptionProps {
  item: ReactElement | string;
  key: string;
}

interface SelectProps {
  maxHeight?: number;
  onChange?: (selectedKey: string) => void;
  options: SelectOptionProps[];
}

const Select: FC<SelectProps> = ({ onChange, options, maxHeight }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0].key);

  const handleOptionSelect = (key: string) => {
    setSelectedValue(key);
    if (onChange) {
      onChange(key);
    }
    setExpanded(false);
  }

  return (
    <div className={'pwd-select noselect' + (expanded ? ' pwd-expanded' : '')}>
      <div className="pwd-dropbtn" onClick={() => setExpanded(!expanded)}>{options.find(({key}) => key === selectedValue)?.item}
        <div className="pwd-dropdown-content" style={{ maxHeight }}>
          {options.map(({ item, key }) => <a href="#" key={key} onClick={() => handleOptionSelect(key)}>{item}</a>)}
        </div>
      </div>
    </div>
  );
}

export default Select;
