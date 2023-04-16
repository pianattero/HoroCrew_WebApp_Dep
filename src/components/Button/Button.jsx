import React from "react";

export const Buttons = ({ text, onClick }) => {
  return (
    <button
      className="border rounded p-1 btn-sm btn"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
