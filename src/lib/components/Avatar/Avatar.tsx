import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'rounded';
  variant?: 'flat' | 'raised' | 'inset';
  status?: 'online' | 'busy' | 'away';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  size = 'md',
  shape = 'circle',
  variant = 'flat',
  status,
  className = '',
}) => {
  return (
    <div className={`nm-avatar-wrapper ${className}`}>
      <div
        className={`nm-avatar nm-avatar-${size} nm-avatar-${shape} nm-avatar-${variant}`}
      >
        {src ? (
          <img src={src} alt={alt} className="nm-avatar-img" />
        ) : (
          <span>{initials || '?'}</span>
        )}
      </div>
      {status && <span className={`nm-avatar-status nm-avatar-status-${status}`} />}
    </div>
  );
};

