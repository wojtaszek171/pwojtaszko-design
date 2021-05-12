import React, { FC } from 'react';
import './Modal.scss';
export interface ModalProps {
    show: Boolean;
    title?: string;
    onClose?: Function;
    children: React.ReactElement;
}
declare const Modal: FC<ModalProps>;
export default Modal;
