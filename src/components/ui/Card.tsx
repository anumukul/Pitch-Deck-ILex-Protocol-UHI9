import * as React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`glass rounded-2xl p-6 ${className}`}>
    {children}
  </div>
);

export default Card;
