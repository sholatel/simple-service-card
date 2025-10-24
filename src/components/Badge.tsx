import React from 'react';

interface BadgeProps {
  variant?: 'public' | 'addon';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'addon', children }) => {
  if (variant === 'public') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-xs text-gray-800 font-medium">
        <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
        {children}
      </span>
    );
  }

  return (
    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800">
      {children}
    </span>
  );
};
