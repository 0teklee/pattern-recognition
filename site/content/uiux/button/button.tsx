import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className={`bg-secondary/2 border-border`}
      onClick={() => {
        alert(`hi ${text}`);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
