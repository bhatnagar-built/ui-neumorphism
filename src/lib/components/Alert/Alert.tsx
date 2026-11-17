import React from 'react';
import { Info, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react';
import './Alert.css';

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
  icon,
  className = '',
}) => {
  const getDefaultIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={20} />;
      case 'warning':
        return <AlertTriangle size={20} />;
      case 'danger':
        return <AlertCircle size={20} />;
      case 'info':
      default:
        return <Info size={20} />;
    }
  };

  return (
    <div className={`nm-alert nm-alert-${type} ${className}`} role="alert">
      <span className="nm-alert-icon">{icon || getDefaultIcon()}</span>
      <div className="nm-alert-content">
        {title && <h4 className="nm-alert-title">{title}</h4>}
        <div className="nm-alert-description">{children}</div>
      </div>
    </div>
  );
};

