import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

/**
 * Button component for common actions
 * 
 * @param label - Text to display on the button
 * @param onClick - Function to call when button is clicked
 * @param variant - Visual style variant (primary or secondary)
 * @param disabled - Whether the button is disabled
 */
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded font-medium focus:outline-none';
  const variantStyles = variant === 'primary'
    ? 'bg-coffee-600 text-white hover:bg-coffee-700'
    : 'bg-coffee-200 text-coffee-800 hover:bg-coffee-300';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${disabledStyles}`}
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
    >
      {label}
    </button>
  );
};

export default Button;