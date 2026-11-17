import React, { forwardRef, useState } from 'react';
import { X } from 'lucide-react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error = false,
      leftIcon,
      rightIcon,
      clearable = false,
      onClear,
      value,
      onChange,
      disabled,
      className = '',
      id,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    return (
      <div className={`nm-input-group ${className}`}>
        {label && (
          <label htmlFor={inputId} className="nm-input-label">
            {label}
          </label>
        )}
        <div
          className={`nm-input-container ${isFocused ? 'nm-input-focused' : ''} ${
            error ? 'nm-input-error' : ''
          }`}
        >
          {leftIcon && <span className="nm-input-icon nm-input-icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            value={value}
            onChange={onChange}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="nm-input"
            {...props}
          />
          {clearable && value && !disabled && (
            <button
              type="button"
              className="nm-input-clear"
              onClick={onClear}
              aria-label="Clear input"
            >
              <X size={16} />
            </button>
          )}
          {rightIcon && <span className="nm-input-icon nm-input-icon-right">{rightIcon}</span>}
        </div>
        {helperText && (
          <span className={`nm-input-helper ${error ? 'nm-input-helper-error' : ''}`}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

