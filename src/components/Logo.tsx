import React from 'react';

const Logo: React.FC<{ size?: 'small' | 'medium' | 'large' }> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-24 h-24'
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <img 
        src="/images/mm-spaces-logo.jpg" 
        alt="MM Spaces Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
