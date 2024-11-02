import React from 'react'

export default function Button({text, variant, outline, lg, className}) {
    const variantStyles = {
      primary: outline ? "border-primary border-2 bg-transparent text-primary" : "text-white bg-primary",
      secondary: outline ? "border-secondary border-2 bg-transparent text-secondary" : "text-primary bg-secondary",
      light: outline ? "border-white border-2 bg-transparent text-white" : "text-primary bg-white",
    };

    const sizeStyles = {
      lg: lg
        ? "px-14 py-4 text-xl rounded-[56px]"
        : "px-10 py-2 text-base rounded-3xl",
    };

    return (
      <button
        className={`${sizeStyles["lg"]} font-bold  ${variantStyles[variant]} ${className}`}
      >
        {text}
      </button>
    );
}
