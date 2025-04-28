import React from 'react';
import s from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className={s.modal__wrapper}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={s.modal__content}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
