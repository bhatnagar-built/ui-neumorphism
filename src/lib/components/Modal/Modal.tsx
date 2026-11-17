import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { IconButton } from '../IconButton/IconButton';
import './Modal.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="nm-modal-overlay" onClick={onClose}>
      <div
        className={`nm-modal-container ${className}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="nm-modal-close">
          <IconButton
            icon={<X size={18} />}
            size="sm"
            shape="circle"
            variant="flat"
            onClick={onClose}
            aria-label="Close dialog"
          />
        </div>
        {title && <h2 style={{ margin: '0 0 16px 0', fontSize: '1.25rem', fontWeight: 700 }}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

