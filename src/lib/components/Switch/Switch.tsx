import React from 'react';
import './Switch.css';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  id?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  size = 'md',
  disabled = false,
  className = '',
  id,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onChange(!checked);
    }
  };

  return (
    <label
      className={`nm-switch-wrapper ${disabled ? 'nm-switch-disabled' : ''} ${className}`}
      onClick={handleClick}
      id={id}
    >
      <div
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        className={`nm-switch-track nm-switch-${size} ${checked ? 'nm-switch-checked' : ''}`}
      >
        <div className="nm-switch-thumb" />
      </div>
      {label && <span className="nm-switch-label">{label}</span>}
    </label>
  );
};
