import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
    text: string;
    handleClick: Function;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ text, handleClick, disabled = false }) => {

    const handleOnClick = () => {
        if (handleClick) {
            handleClick();
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') { 
            handleOnClick();
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
