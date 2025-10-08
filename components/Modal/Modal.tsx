import { useEffect } from "react";
import css from './Modal.module.css'
import { createPortal } from "react-dom";

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ onClose, children }: ModalProps) {
    
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
    };
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);
      

    return createPortal(
        <div className={css.backdrop} onClick={handleBackdropClick}>
            <div className={css.modal}>
               {children}
            </div>
        </div>,
         document.body
    );
}