import React from "react";

const Button = ({ type, children, click, secondary }) => {
  const buttonStyle = secondary ? "bg-white text-lg text-coral-red font-palanquin px-10 py-2 tracking-wide rounded-full"
  : "bg-coral-red text-lg text-white font-palanquin px-10 py-2 tracking-wide rounded-full"
  return (
    <div className="flex justify-center items-center">
      <button
        className={buttonStyle}
        type={type}
        onClick={click ? click : () => {}}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
