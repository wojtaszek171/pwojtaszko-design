import React, { FC, KeyboardEvent, MouseEvent } from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    onClick: Function;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, onClick, disabled = false }) => {

    const handleOnClick = (e: MouseEvent | KeyboardEvent) => {
        if (onClick) {
            onClick(e);
        }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') { 
            handleOnClick(event);
        }
    };

    return (
        <div className={`pwd-button-component ${disabled ? ' disabled' : ''}`}>
            <button
                disabled={disabled}
                onClick={handleOnClick}
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                {text}
            </button>
        </div>
    );
}

export default Button;
