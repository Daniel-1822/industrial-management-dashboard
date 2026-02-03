import React from 'react';

const Button = ({ text, variant = 'primary', onClick }) => {
    const baseStyles = "px-6 py-2.5 font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95";
    const variants = {
        primary: "bg-[#f8f546] text-[#363737] hover:bg-[#363737] hover:text-white shadow-lg hover:shadow-[#f8f546]/20",
        secondary: "bg-[#363737] text-white hover:bg-[#f8f546] hover:text-[#363737] shadow-lg",
        outline: "border-2 border-[#363737] text-[#363737] hover:bg-[#363737] hover:text-white"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.primary}`}
        >
            {text}
        </button>
    );
};

export default Button;
