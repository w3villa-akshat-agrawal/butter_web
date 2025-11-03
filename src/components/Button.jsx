// src/components/Button.jsx
const Button = ({ children, onClick, className = '', variant = 'solid' }) => {
  const baseStyles =
    'rounded-full text-white font-semibold transition duration-200 h-[48px] flex items-center justify-center';

  const variants = {
    solid: 'bg-gray-800 hover:bg-gray-900',
    gradient:
      'bg-butter-button shadow-butter hover:opacity-90 text-gray-800',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
