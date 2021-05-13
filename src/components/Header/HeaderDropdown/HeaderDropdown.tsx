import React, { FC, ReactElement, useState } from 'react';

export interface DropdownElementProps {
  item: ReactElement,
  onClick: Function,
  key: string
}

interface HeaderDropdownProps {
  title?: string;
  elements: DropdownElementProps[];
}

const HeaderDropdown: FC<HeaderDropdownProps> = ({ title, elements }) => {
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = (onClick: Function) => {
    onClick();
    setExpanded(false);
  }

  return (
    <div className={'pwd-header-dropdown' + (expanded ? ' pwd-expanded' : '')}>
      {title && <button className="pwd-dropbtn" onClick={() => setExpanded(!expanded)}>{title}</button>}
      <div className="pwd-dropdown-content">
        {elements.map(({ item, onClick, key }) => <a href="#" key={key} onClick={() => handleOnClick(onClick)}>{item}</a>)}
      </div>
    </div>
  );
}

export default HeaderDropdown;
