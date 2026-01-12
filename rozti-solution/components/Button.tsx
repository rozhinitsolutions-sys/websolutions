import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  showArrow?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  showArrow = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 focus:ring-white",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600 border border-gray-700",
    outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/10 focus:ring-white",
    text: "bg-transparent text-gray-400 hover:text-white px-0 hover:bg-transparent"
  };

  return (
    <button 
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;