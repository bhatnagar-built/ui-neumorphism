import React from 'react';
import './Progress.css';

export interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className={`nm-progress-wrapper ${className}`}>
      {(label || showValue) && (
        <div className="nm-progress-header">
          {label && <span>{label}</span>}
          {showValue && <span className="nm-progress-value">{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={`nm-progress-track nm-progress-${size}`}>
        <div
          className={`nm-progress-bar nm-progress-${color}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};
