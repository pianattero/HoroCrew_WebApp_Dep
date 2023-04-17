import React from "react";

export const Buttons = ({ text, onClick, bg }) => {
  return (
    <button
      className="border rounded py-1 px-2 btn-sm btn m-1"
      type="button"
      style={{ backgroundColor: { bg } }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
