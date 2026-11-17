import { forwardRef } from 'react';
import './IconButton.css';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'flat' | 'raised' | 'inset';
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'circle';
  active?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'flat',
      color = 'default',
      size = 'md',
      shape = 'circle',
      active = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const classNames = [
      'nm-icon-btn',
      `nm-icon-btn-${size}`,
      `nm-icon-btn-${variant}`,
      `nm-icon-btn-${shape}`,
      color !== 'default' ? `nm-icon-btn-${color}` : '',
      active ? 'nm-icon-btn-active' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classNames} disabled={disabled} {...props}>
        {icon}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
