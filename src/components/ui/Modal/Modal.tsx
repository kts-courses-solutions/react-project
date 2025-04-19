import React from 'react';
import s from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className={s.modal__wrapper}>
            <div className={s.modal__content}>{children}</div>
        </div>
    );
};

export default Modal;
