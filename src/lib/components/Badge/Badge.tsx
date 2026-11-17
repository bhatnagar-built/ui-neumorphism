import React from 'react';
import './Badge.css';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'flat' | 'inset';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'flat',
  color = 'default',
  dot = true,
  className = '',
}) => {
  return (
    <span
      className={`nm-badge nm-badge-${variant} nm-badge-${color} ${className}`}
    >
      {dot && <span className="nm-badge-dot" />}
      {children}
    </span>
  );
};

