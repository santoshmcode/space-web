import React from "react";

const Button = ({ className, text }) => {
    return (
        <>
            <button
                className={`w-40 h-12 font-Sora font-medium text-sm rounded-full px-4 py-2 ${className}`}
            >
                {text}
            </button>
        </>
    );
};

export default Button;
