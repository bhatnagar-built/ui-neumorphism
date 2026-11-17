import React, { useState } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  content: React.ReactNode;
  position?: 'top' | 'bottom';
  children: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
  className = '',
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`nm-tooltip-wrapper ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`nm-tooltip-bubble nm-tooltip-${position}`} role="tooltip">
          {content}
        </div>
      )}
    </div>
  );
};
