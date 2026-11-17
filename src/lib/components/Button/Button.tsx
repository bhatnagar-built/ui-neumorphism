import React, { forwardRef } from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'flat' | 'raised' | 'inset' | 'convex' | 'concave';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill' | 'circle';
  active?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'flat',
      color = 'default',
      size = 'md',
      shape = 'rounded',
      active = false,
      loading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const classNames = [
      'nm-btn',
      `nm-btn-${size}`,
      `nm-btn-${variant}`,
      `nm-btn-${shape}`,
      color !== 'default' ? `nm-btn-${color}` : '',
      active ? 'nm-btn-active' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classNames} disabled={disabled || loading} {...props}>
        {loading ? (
          <span className="nm-spinner" />
        ) : (
          <>
            {leftIcon && <span className="nm-btn-icon-left">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="nm-btn-icon-right">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
