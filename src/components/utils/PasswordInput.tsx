import React, { useState } from 'react';

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput: React.FC<PasswordInputProps> = ({ className, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <input
        {...props}
        type={showPassword ? "text" : "password"}
        className={`${className || ''} border-end-0`} 
      />
      <button 
        type="button" 
        className="btn bg-white border border-start-0 text-secondary shadow-none d-flex align-items-center px-3"
        onClick={togglePasswordVisibility}
        aria-label={showPassword ? "Hide password" : "Show password"}
        title={showPassword ? "Hide password" : "Show password"}
      >
        <i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}></i>
      </button>
    </>
  );
};