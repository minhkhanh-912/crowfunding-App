import React from "react";

const ButtonGoogle = ({text="Sign up with google", onClick=()=>{}}) => {
  return (
    <button onClick={onClick} className="flex items-center justify-center w-full p-3 mb-5 font-semibold border rounded-lg gap-x-2 border-strock dark:border-darkStroke dark:text-white lg:mb-3 text-text2">
      <img srcSet="/Google.png 2x" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};

export default ButtonGoogle;
