import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  disabled,
  style,
  ...rest
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#38bdf8', color: '#0b0f19', border: '1px solid #38bdf8' };
      case 'danger':
        return { backgroundColor: '#ef4444', color: '#ffffff', border: '1px solid #dc2626' };
      case 'ghost':
        return { backgroundColor: 'transparent', color: '#9ca3af', border: '1px solid transparent' };
      default:
        return { backgroundColor: '#182238', color: '#f3f4f6', border: '1px solid #232f48' };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: '4px 8px', fontSize: '0.75rem' };
      case 'lg':
        return { padding: '10px 20px', fontSize: '1rem' };
      default:
        return { padding: '6px 14px', fontSize: '0.875rem' };
    }
  };

  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        borderRadius: '6px',
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.15s ease',
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style,
      }}
      {...rest}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
};
