import React from "react";

export const Buttons = ({ text, onClick, bg, type = "button" }) => {
  return (
    <button
      className="border rounded py-1 px-2 btn-sm btn m-1"
      type={type}
      style={{ backgroundColor: { bg } }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
