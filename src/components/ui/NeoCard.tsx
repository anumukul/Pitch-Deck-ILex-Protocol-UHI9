import * as React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const NeoCard: React.FC<NeoCardProps> = ({
  children, className = '', color = 'bg-white',
}) => (
  <div className={`${color} border-2 border-black p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${className}`}>
    {children}
  </div>
);

export default NeoCard;
