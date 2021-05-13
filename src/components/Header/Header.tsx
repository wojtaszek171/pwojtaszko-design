import React, { FC, ReactElement } from 'react';
import HeaderDropdown from './HeaderDropdown/';
import { DropdownElementProps } from './HeaderDropdown/HeaderDropdown';
import './Header.scss';

interface HeaderProps {
  left?: ReactElement;
  right?: ReactElement;
  dropdownTitle?: string;
  dropdownElements?: DropdownElementProps[];
}

const Header: FC<HeaderProps> = ({ left, right, dropdownTitle, dropdownElements }) => {
  return (
    <div className="pwd-header-component">
      {<div className='pwd-header-left'>
        {left}
      </div>}
      {<div className='pwd-header-right'>
        {right}
      </div>}
      {!!dropdownElements?.length &&
        <HeaderDropdown
          title={dropdownTitle}
          elements={dropdownElements}
        />
      }
    </div>
  );
}

export default Header;
