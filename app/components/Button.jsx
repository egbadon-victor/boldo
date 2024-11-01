import React from 'react'

export default function Button({text, variant, outline}) {
    const variantStyles = {
      primary: outline ? "border-primary border-2 bg-transparent text-primary" : "text-white bg-primary",
      secondary: outline ? "border-secondary border-2 bg-transparent text-secondary" : "text-primary bg-secondary",
      light: outline ? "border-white border-2 bg-transparent text-white" : "text-primary bg-white",
    };

    return (
        <button className={`px-10 py-2 rounded-3xl font-bold  ${variantStyles[variant]}`}>
            {text}
        </button>
    )
}
