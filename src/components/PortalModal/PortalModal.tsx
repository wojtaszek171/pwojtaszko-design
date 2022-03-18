import React, { FC, useEffect, useRef } from 'react';
import ReactPortal from '../Portal/Portal';
import './PortalModal.scss';

export interface PortalModalProps {
  show: Boolean;
  title?: string;
  wrapperId?: string; 
  onClose?: Function;
  children: React.ReactElement;
}

const PortalModal: FC<PortalModalProps> = ({ show, title, onClose, children, wrapperId }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handleClose();
    }
  };

  const handleClickEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') { 
      handleClose();
    }
  };

  const handleCloseKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') { 
      handleClose();
    }
  };
 
  useEffect(() => {
    if (onClose) {
      document.addEventListener('click', handleClickOutside, true);
      document.addEventListener('keydown', handleClickEscape, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
        document.removeEventListener('keydown', handleClickEscape, true);
      };
    }
  });

  return (
    show &&
    <ReactPortal wrapperId={wrapperId}>
      <>
        <div className='pwd-modal-background'/>
        <div className='pwd-modal-component' ref={ref}>
          <div className='pwd-title-box'>
            <span>{title}</span>
          </div>
          {onClose && (
            <span
              className='pwd-close-button noselect'
              onClick={handleClose}
              role='button'
              tabIndex={0}
              onKeyDown={handleCloseKeyDown}
            >
              x
            </span>
          )}
          <div className='pwd-content-box'>
            {children}
          </div>
          <div className='pwd-footer-box'></div>
        </div>
      </>
    </ReactPortal>
  );
}

export default PortalModal;
