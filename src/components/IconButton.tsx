import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  ariaLabel,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`active:scale-95 transition-transform duration-200 rounded ${className}`}
    >
      {icon}
    </button>
  );
};
