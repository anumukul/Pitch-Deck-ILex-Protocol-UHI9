import * as React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children, onClick, variant = 'primary', className = '', disabled = false,
}) => {
  const base = 'px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2';
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-purple-600/20 active:scale-[0.97]',
    secondary: 'glass text-gray-200 hover:bg-white/10 active:scale-[0.97]',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
  };
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
